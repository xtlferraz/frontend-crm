import { eventConstants } from '../_constants';

export function events(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_REQUEST:
      return { registering: true };
    case eventConstants.UPDATE_SUCCESS:
      return {};
    case eventConstants.UPDATE_FAILURE:
      return {};
    case eventConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GETALL_SUCCESS:
      return {
        items: action.events.data.result,
      };
    case eventConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map((event) =>
          event.id === action.id ? { ...event, deleting: true } : event
        ),
      };
    case eventConstants.DELETE_SUCCESS:
      // remove deleted event from state
      return {
        items: state.items.filter((event) => event.id !== action.id),
      };
    case eventConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to event
      return {
        ...state,
        items: state.items.map((event) => {
          if (event.id === action.id) {
            // make copy of event without 'deleting:true' property
            const { deleting, ...eventCopy } = event;
            // return copy of event with 'deleteError:[error]' property
            return { ...eventCopy, deleteError: action.error };
          }

          return event;
        }),
      };
    default:
      return state;
  }
}
