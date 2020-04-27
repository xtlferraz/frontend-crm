import { eventConstants } from '../_constants';
import { eventService } from '../_services';
import { alertActions } from '.';

export const eventActions = {
  register,
  getAll,
  delete: _delete,
  update: update,
};

function register(event) {
  return (dispatch) => {
    dispatch(request(event));

    eventService.register(event).then(
      (event) => {
        dispatch(success());
        dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(event) {
    return { type: eventConstants.REGISTER_REQUEST, event };
  }
  function success(event) {
    return { type: eventConstants.REGISTER_SUCCESS, event };
  }
  function failure(error) {
    return { type: eventConstants.REGISTER_FAILURE, error };
  }
}

function update(event) {
  return (dispatch) => {
    dispatch(request(event));

    eventService.update(event).then(
      (event) => {
        dispatch(success());
        dispatch(alertActions.success('Update successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(event) {
    return { type: eventConstants.UPDATE_REQUEST, event };
  }
  function success(event) {
    return { type: eventConstants.UPDATE_SUCCESS, event };
  }
  function failure(error) {
    return { type: eventConstants.eventS_UPDATE_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    eventService.getAll().then(
      (events) => dispatch(success(events)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: eventConstants.GETALL_REQUEST };
  }
  function success(events) {
    return { type: eventConstants.GETALL_SUCCESS, events };
  }
  function failure(error) {
    return { type: eventConstants.GETALL_FAILURE, error };
  }
}

function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    eventService.delete(id).then(
      (event) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: eventConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: eventConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: eventConstants.DELETE_FAILURE, id, error };
  }
}
