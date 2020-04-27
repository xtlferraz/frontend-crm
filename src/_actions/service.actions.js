import { serviceConstants } from '../_constants';
import { serviceService } from '../_services';
import { alertActions } from '.';

export const serviceActions = {
  register,
  getAll,
  delete: _delete,
  update: update,
};

function register(service) {
  return (dispatch) => {
    dispatch(request(service));

    serviceService.register(service).then(
      (service) => {
        dispatch(success());
        dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(service) {
    return { type: serviceConstants.REGISTER_REQUEST, service };
  }
  function success(service) {
    return { type: serviceConstants.REGISTER_SUCCESS, service };
  }
  function failure(error) {
    return { type: serviceConstants.REGISTER_FAILURE, error };
  }
}

function update(service) {
  return (dispatch) => {
    dispatch(request(service));

    serviceService.update(service).then(
      (service) => {
        dispatch(success());
        dispatch(alertActions.success('Update successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(service) {
    return { type: serviceConstants.UPDATE_REQUEST, service };
  }
  function success(service) {
    return { type: serviceConstants.UPDATE_SUCCESS, service };
  }
  function failure(error) {
    return { type: serviceConstants.serviceS_UPDATE_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    serviceService.getAll().then(
      (services) => dispatch(success(services)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: serviceConstants.GETALL_REQUEST };
  }
  function success(services) {
    return { type: serviceConstants.GETALL_SUCCESS, services };
  }
  function failure(error) {
    return { type: serviceConstants.GETALL_FAILURE, error };
  }
}

function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    serviceService.delete(id).then(
      (service) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: serviceConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: serviceConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: serviceConstants.DELETE_FAILURE, id, error };
  }
}
