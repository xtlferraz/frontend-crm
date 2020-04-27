import { leadConstants } from '../_constants';

export function leads(state = {}, action) {
  switch (action.type) {
    case leadConstants.UPDATE_REQUEST:
      return { registering: true };
    case leadConstants.UPDATE_SUCCESS:
      return {};
    case leadConstants.UPDATE_FAILURE:
      return {};
    case leadConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case leadConstants.GETALL_SUCCESS:
      return {
        items: action.leads.data.result,
      };
    case leadConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };
    case leadConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map((lead) =>
          lead.id === action.id ? { ...lead, deleting: true } : lead
        ),
      };
    case leadConstants.DELETE_SUCCESS:
      // remove deleted lead from state
      return {
        items: state.items.filter((lead) => lead.id !== action.id),
      };
    case leadConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to lead
      return {
        ...state,
        items: state.items.map((lead) => {
          if (lead.id === action.id) {
            // make copy of lead without 'deleting:true' property
            const { deleting, ...leadCopy } = lead;
            // return copy of lead with 'deleteError:[error]' property
            return { ...leadCopy, deleteError: action.error };
          }

          return lead;
        }),
      };
    default:
      return state;
  }
}
