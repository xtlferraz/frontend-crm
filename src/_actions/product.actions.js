import { productConstants } from '../_constants';
import { productService } from '../_services';
import { alertActions } from '.';

export const productActions = {
  register,
  getAll,
  delete: _delete,
  update: update,
};

function register(product) {
  return (dispatch) => {
    dispatch(request(product));

    productService.register(product).then(
      (product) => {
        dispatch(success());
        dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(product) {
    return { type: productConstants.REGISTER_REQUEST, product };
  }
  function success(product) {
    return { type: productConstants.REGISTER_SUCCESS, product };
  }
  function failure(error) {
    return { type: productConstants.REGISTER_FAILURE, error };
  }
}

function update(product) {
  return (dispatch) => {
    dispatch(request(product));

    productService.update(product).then(
      (product) => {
        dispatch(success());
        dispatch(alertActions.success('Update successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(product) {
    return { type: productConstants.UPDATE_REQUEST, product };
  }
  function success(product) {
    return { type: productConstants.UPDATE_SUCCESS, product };
  }
  function failure(error) {
    return { type: productConstants.productS_UPDATE_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    productService.getAll().then(
      (products) => dispatch(success(products)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: productConstants.GETALL_REQUEST };
  }
  function success(products) {
    return { type: productConstants.GETALL_SUCCESS, products };
  }
  function failure(error) {
    return { type: productConstants.GETALL_FAILURE, error };
  }
}

function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    productService.delete(id).then(
      (product) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: productConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: productConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: productConstants.DELETE_FAILURE, id, error };
  }
}
