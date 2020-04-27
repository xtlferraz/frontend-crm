import { peopleConstants } from '../_constants';
import { peopleService } from '../_services';
import { alertActions } from '.';

export const peopleActions = {
  register,
  getAll,
  delete: _delete,
  update: update,
};

function register(people) {
  return (dispatch) => {
    dispatch(request(people));

    peopleService.register(people).then(
      (people) => {
        dispatch(success());
        dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(people) {
    return { type: peopleConstants.REGISTER_REQUEST, people };
  }
  function success(people) {
    return { type: peopleConstants.REGISTER_SUCCESS, people };
  }
  function failure(error) {
    return { type: peopleConstants.REGISTER_FAILURE, error };
  }
}

function update(people) {
  return (dispatch) => {
    dispatch(request(people));

    peopleService.update(people).then(
      (people) => {
        dispatch(success());
        dispatch(alertActions.success('Update successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(people) {
    return { type: peopleConstants.UPDATE_REQUEST, people };
  }
  function success(people) {
    return { type: peopleConstants.UPDATE_SUCCESS, people };
  }
  function failure(error) {
    return { type: peopleConstants.peopleS_UPDATE_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    peopleService.getAll().then(
      (peoples) => dispatch(success(peoples)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: peopleConstants.GETALL_REQUEST };
  }
  function success(peoples) {
    return { type: peopleConstants.GETALL_SUCCESS, peoples };
  }
  function failure(error) {
    return { type: peopleConstants.GETALL_FAILURE, error };
  }
}

function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    peopleService.delete(id).then(
      (people) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: peopleConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: peopleConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: peopleConstants.DELETE_FAILURE, id, error };
  }
}
