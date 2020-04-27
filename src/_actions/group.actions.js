import { groupConstants } from '../_constants';
import { groupService } from '../_services';
import { alertActions } from '.';

export const groupActions = {
  register,
  getAll,
  delete: _delete,
  update: update,
};

function register(group) {
  return (dispatch) => {
    dispatch(request(group));

    groupService.register(group).then(
      (group) => {
        dispatch(success());
        dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(group) {
    return { type: groupConstants.REGISTER_REQUEST, group };
  }
  function success(group) {
    return { type: groupConstants.REGISTER_SUCCESS, group };
  }
  function failure(error) {
    return { type: groupConstants.REGISTER_FAILURE, error };
  }
}

function update(group) {
  return (dispatch) => {
    dispatch(request(group));

    groupService.update(group).then(
      (group) => {
        dispatch(success());
        dispatch(alertActions.success('Update successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(group) {
    return { type: groupConstants.UPDATE_REQUEST, group };
  }
  function success(group) {
    return { type: groupConstants.UPDATE_SUCCESS, group };
  }
  function failure(error) {
    return { type: groupConstants.groupS_UPDATE_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    groupService.getAll().then(
      (groups) => dispatch(success(groups)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: groupConstants.GETALL_REQUEST };
  }
  function success(groups) {
    return { type: groupConstants.GETALL_SUCCESS, groups };
  }
  function failure(error) {
    return { type: groupConstants.GETALL_FAILURE, error };
  }
}

function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    groupService.delete(id).then(
      (group) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: groupConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: groupConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: groupConstants.DELETE_FAILURE, id, error };
  }
}
