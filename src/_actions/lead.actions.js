import { leadConstants } from '../_constants';
import { leadService } from '../_services';
import { alertActions } from '.';

export const leadActions = {
  register,
  getAll,
  delete: _delete,
  update: update,
};

function register(lead) {
  return (dispatch) => {
    dispatch(request(lead));

    leadService.register(lead).then(
      (lead) => {
        dispatch(success());
        dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(lead) {
    return { type: leadConstants.REGISTER_REQUEST, lead };
  }
  function success(lead) {
    return { type: leadConstants.REGISTER_SUCCESS, lead };
  }
  function failure(error) {
    return { type: leadConstants.REGISTER_FAILURE, error };
  }
}

function update(lead) {
  return (dispatch) => {
    dispatch(request(lead));

    leadService.update(lead).then(
      (lead) => {
        dispatch(success());
        dispatch(alertActions.success('Update successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(lead) {
    return { type: leadConstants.UPDATE_REQUEST, lead };
  }
  function success(lead) {
    return { type: leadConstants.UPDATE_SUCCESS, lead };
  }
  function failure(error) {
    return { type: leadConstants.leadS_UPDATE_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    leadService.getAll().then(
      (leads) => dispatch(success(leads)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: leadConstants.GETALL_REQUEST };
  }
  function success(leads) {
    return { type: leadConstants.GETALL_SUCCESS, leads };
  }
  function failure(error) {
    return { type: leadConstants.GETALL_FAILURE, error };
  }
}

function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    leadService.delete(id).then(
      (lead) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: leadConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: leadConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: leadConstants.DELETE_FAILURE, id, error };
  }
}
