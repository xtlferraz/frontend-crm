import { categoryConstants } from '../_constants';
import { categoryService } from '../_services';
import { alertActions } from '.';

export const categoryActions = {
  register,
  getAll,
  delete: _delete,
  update: update,
};

function register(category) {
  return (dispatch) => {
    dispatch(request(category));

    categoryService.register(category).then(
      (category) => {
        dispatch(success());
        dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(category) {
    return { type: categoryConstants.REGISTER_REQUEST, category };
  }
  function success(category) {
    return { type: categoryConstants.REGISTER_SUCCESS, category };
  }
  function failure(error) {
    return { type: categoryConstants.REGISTER_FAILURE, error };
  }
}

function update(category) {
  return (dispatch) => {
    dispatch(request(category));

    categoryService.update(category).then(
      (category) => {
        dispatch(success());
        dispatch(alertActions.success('Update successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(category) {
    return { type: categoryConstants.UPDATE_REQUEST, category };
  }
  function success(category) {
    return { type: categoryConstants.UPDATE_SUCCESS, category };
  }
  function failure(error) {
    return { type: categoryConstants.categoryS_UPDATE_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    categoryService.getAll().then(
      (categorys) => dispatch(success(categorys)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: categoryConstants.GETALL_REQUEST };
  }
  function success(categorys) {
    return { type: categoryConstants.GETALL_SUCCESS, categorys };
  }
  function failure(error) {
    return { type: categoryConstants.GETALL_FAILURE, error };
  }
}

function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    categoryService.delete(id).then(
      (category) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: categoryConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: categoryConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: categoryConstants.DELETE_FAILURE, id, error };
  }
}
