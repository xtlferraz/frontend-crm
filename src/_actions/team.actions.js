import { teamConstants } from '../_constants';
import { teamService } from '../_services';
import { alertActions } from '.';

export const teamActions = {
  register,
  getAll,
  delete: _delete,
  update: update,
};

function register(team) {
  return (dispatch) => {
    dispatch(request(team));

    teamService.register(team).then(
      (team) => {
        dispatch(success());
        dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(team) {
    return { type: teamConstants.REGISTER_REQUEST, team };
  }
  function success(team) {
    return { type: teamConstants.REGISTER_SUCCESS, team };
  }
  function failure(error) {
    return { type: teamConstants.REGISTER_FAILURE, error };
  }
}

function update(team) {
  return (dispatch) => {
    dispatch(request(team));

    teamService.update(team).then(
      (team) => {
        dispatch(success());
        dispatch(alertActions.success('Update successful'));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(team) {
    return { type: teamConstants.UPDATE_REQUEST, team };
  }
  function success(team) {
    return { type: teamConstants.UPDATE_SUCCESS, team };
  }
  function failure(error) {
    return { type: teamConstants.teamS_UPDATE_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    teamService.getAll().then(
      (teams) => dispatch(success(teams)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: teamConstants.GETALL_REQUEST };
  }
  function success(teams) {
    return { type: teamConstants.GETALL_SUCCESS, teams };
  }
  function failure(error) {
    return { type: teamConstants.GETALL_FAILURE, error };
  }
}

function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    teamService.delete(id).then(
      (team) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: teamConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: teamConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: teamConstants.DELETE_FAILURE, id, error };
  }
}
