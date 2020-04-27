import { serviceConstants } from '../_constants';

export function services(state = {}, action) {
  switch (action.type) {
    case serviceConstants.UPDATE_REQUEST:
      return { registering: true };
    case serviceConstants.UPDATE_SUCCESS:
      return {};
    case serviceConstants.UPDATE_FAILURE:
      return {};
    case serviceConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case serviceConstants.GETALL_SUCCESS:
      return {
        items: action.services.data.result,
      };
    case serviceConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };
    case serviceConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map((service) =>
          service.id === action.id ? { ...service, deleting: true } : service
        ),
      };
    case serviceConstants.DELETE_SUCCESS:
      // remove deleted service from state
      return {
        items: state.items.filter((service) => service.id !== action.id),
      };
    case serviceConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to service
      return {
        ...state,
        items: state.items.map((service) => {
          if (service.id === action.id) {
            // make copy of service without 'deleting:true' property
            const { deleting, ...serviceCopy } = service;
            // return copy of service with 'deleteError:[error]' property
            return { ...serviceCopy, deleteError: action.error };
          }

          return service;
        }),
      };
    default:
      return state;
  }
}
