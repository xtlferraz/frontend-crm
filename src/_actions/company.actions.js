import { companyConstants } from '../_constants';
import { companyService } from '../_services';
import { alertActions } from '.';

export const companyActions = {
  register,
  getAll,
  getById,
  edit,
  delete: _delete,
  update: update,
};

function register(company) {
  return (dispatch) => {
    dispatch(request(company));

    companyService.register(company).then(
      (company) => {
        dispatch(success());
        dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(company) {
    return { type: companyConstants.REGISTER_REQUEST, company };
  }
  function success(company) {
    return { type: companyConstants.REGISTER_SUCCESS, company };
  }
  function failure(error) {
    return { type: companyConstants.REGISTER_FAILURE, error };
  }
}

function update(company) {
  return (dispatch) => {
    dispatch(request(company));

    console.log(company);
    companyService.update(company).then(
      (company) => {
        dispatch(success());
        dispatch(alertActions.success('Update successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(company) {
    return { type: companyConstants.UPDATE_REQUEST, company };
  }
  function success(company) {
    return { type: companyConstants.UPDATE_SUCCESS, company };
  }
  function failure(error) {
    return { type: companyConstants.UPDATE_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    companyService.getAll().then(
      (companys) => dispatch(success(companys)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: companyConstants.GETALL_REQUEST };
  }
  function success(companys) {
    return { type: companyConstants.GETALL_SUCCESS, companys };
  }
  function failure(error) {
    return { type: companyConstants.GETALL_FAILURE, error };
  }
}

function getById(id) {
  return (dispatch) => {
    dispatch(request());

    companyService.getById(id).then(
      (companys) => dispatch(success(companys)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: companyConstants.GETBYID_REQUEST };
  }
  function success(companys) {
    return { type: companyConstants.GETBYID_SUCCESS, companys };
  }
  function failure(error) {
    return { type: companyConstants.GETBYID_FAILURE, error };
  }
}

function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    companyService.delete(id).then(
      (company) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: companyConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: companyConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: companyConstants.DELETE_FAILURE, id, error };
  }
}

function edit(id) {
  return (dispatch) => {
    dispatch(request(id));

    companyService.getById(id).then(
      (company) => dispatch(success(company)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request(id) {
    return { type: companyConstants.EDIT_REQUEST, id };
  }
  function success(company) {
    return { type: companyConstants.EDIT_SUCCESS, company };
  }
  function failure(error) {
    return { type: companyConstants.EDIT_FAILURE, error };
  }
}
