import { companyConstants } from '../_constants';

export function companys(state = {}, action) {
  switch (action.type) {
    case companyConstants.UPDATE_REQUEST:
      return { registering: true };
    case companyConstants.UPDATE_SUCCESS:
      return {};
    case companyConstants.UPDATE_FAILURE:
      return {};
    case companyConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case companyConstants.GETALL_SUCCESS:
      return {
        items: action.companys.data.result,
      };
    case companyConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };
    case companyConstants.GETBYID_REQUEST:
      return {
        loading: true,
      };
    case companyConstants.GETBYID_SUCCESS:
      return {
        items: action.companys.data.result,
      };
    case companyConstants.GETBYID_FAILURE:
      return {
        error: action.error,
      };
    case companyConstants.EDIT_REQUEST:
      return {
        loading: true,
        company: action.id,
      };
    case companyConstants.EDIT_SUCCESS:
      return action.company.data.result;
    case companyConstants.EDIT_FAILURE:
      return {
        error: action.error,
      };
    case companyConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map((company) =>
          company.id === action.id ? { ...company, deleting: true } : company
        ),
      };
    case companyConstants.DELETE_SUCCESS:
      // remove deleted company from state
      return {
        items: state.items.filter((company) => company.id !== action.id),
      };
    case companyConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to company
      return {
        ...state,
        items: state.items.map((company) => {
          if (company.id === action.id) {
            // make copy of company without 'deleting:true' property
            const { deleting, ...companyCopy } = company;
            // return copy of company with 'deleteError:[error]' property
            return { ...companyCopy, deleteError: action.error };
          }

          return company;
        }),
      };
    default:
      return state;
  }
}
