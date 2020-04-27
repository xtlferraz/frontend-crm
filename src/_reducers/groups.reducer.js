import { groupConstants } from '../_constants';

export function groups(state = {}, action) {
  switch (action.type) {
    case groupConstants.UPDATE_REQUEST:
      return { registering: true };
    case groupConstants.UPDATE_SUCCESS:
      return {};
    case groupConstants.UPDATE_FAILURE:
      return {};
    case groupConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case groupConstants.GETALL_SUCCESS:
      return {
        items: action.groups.data.result,
      };
    case groupConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };
    case groupConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map((group) =>
          group.id === action.id ? { ...group, deleting: true } : group
        ),
      };
    case groupConstants.DELETE_SUCCESS:
      // remove deleted group from state
      return {
        items: state.items.filter((group) => group.id !== action.id),
      };
    case groupConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to group
      return {
        ...state,
        items: state.items.map((group) => {
          if (group.id === action.id) {
            // make copy of group without 'deleting:true' property
            const { deleting, ...groupCopy } = group;
            // return copy of group with 'deleteError:[error]' property
            return { ...groupCopy, deleteError: action.error };
          }

          return group;
        }),
      };
    default:
      return state;
  }
}
