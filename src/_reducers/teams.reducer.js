import { teamConstants } from '../_constants';

export function teams(state = {}, action) {
  switch (action.type) {
    case teamConstants.UPDATE_REQUEST:
      return { registering: true };
    case teamConstants.UPDATE_SUCCESS:
      return {};
    case teamConstants.UPDATE_FAILURE:
      return {};
    case teamConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case teamConstants.GETALL_SUCCESS:
      return {
        items: action.teams.data.result,
      };
    case teamConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };
    case teamConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map((team) =>
          team.id === action.id ? { ...team, deleting: true } : team
        ),
      };
    case teamConstants.DELETE_SUCCESS:
      // remove deleted team from state
      return {
        items: state.items.filter((team) => team.id !== action.id),
      };
    case teamConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to team
      return {
        ...state,
        items: state.items.map((team) => {
          if (team.id === action.id) {
            // make copy of team without 'deleting:true' property
            const { deleting, ...teamCopy } = team;
            // return copy of team with 'deleteError:[error]' property
            return { ...teamCopy, deleteError: action.error };
          }

          return team;
        }),
      };
    default:
      return state;
  }
}
