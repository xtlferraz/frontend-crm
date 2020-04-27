import { peopleConstants } from '../_constants';

export function peoples(state = {}, action) {
  switch (action.type) {
    case peopleConstants.UPDATE_REQUEST:
      return { registering: true };
    case peopleConstants.UPDATE_SUCCESS:
      return {};
    case peopleConstants.UPDATE_FAILURE:
      return {};
    case peopleConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case peopleConstants.GETALL_SUCCESS:
      return {
        items: action.peoples.data.result,
      };
    case peopleConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };
    case peopleConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map((people) =>
          people.id === action.id ? { ...people, deleting: true } : people
        ),
      };
    case peopleConstants.DELETE_SUCCESS:
      // remove deleted people from state
      return {
        items: state.items.filter((people) => people.id !== action.id),
      };
    case peopleConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to people
      return {
        ...state,
        items: state.items.map((people) => {
          if (people.id === action.id) {
            // make copy of people without 'deleting:true' property
            const { deleting, ...peopleCopy } = people;
            // return copy of people with 'deleteError:[error]' property
            return { ...peopleCopy, deleteError: action.error };
          }

          return people;
        }),
      };
    default:
      return state;
  }
}
