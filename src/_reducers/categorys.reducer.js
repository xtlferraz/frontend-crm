import { categoryConstants } from '../_constants';

export function categorys(state = {}, action) {
  switch (action.type) {
    case categoryConstants.UPDATE_REQUEST:
      return { registering: true };
    case categoryConstants.UPDATE_SUCCESS:
      return {};
    case categoryConstants.UPDATE_FAILURE:
      return {};
    case categoryConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case categoryConstants.GETALL_SUCCESS:
      return {
        items: action.categorys.data.result,
      };
    case categoryConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };
    case categoryConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map((category) =>
          category.id === action.id ? { ...category, deleting: true } : category
        ),
      };
    case categoryConstants.DELETE_SUCCESS:
      // remove deleted category from state
      return {
        items: state.items.filter((category) => category.id !== action.id),
      };
    case categoryConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to category
      return {
        ...state,
        items: state.items.map((category) => {
          if (category.id === action.id) {
            // make copy of category without 'deleting:true' property
            const { deleting, ...categoryCopy } = category;
            // return copy of category with 'deleteError:[error]' property
            return { ...categoryCopy, deleteError: action.error };
          }

          return category;
        }),
      };
    default:
      return state;
  }
}
