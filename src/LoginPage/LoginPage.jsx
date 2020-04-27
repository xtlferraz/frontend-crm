import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import { FormGroup, StyledLink } from './styles';
import {
  TextField,
  Grid,
  Button,
  CssBaseline,
  Typography,
} from '@material-ui/core';

function LoginPage() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  return (
    <div style={{ padding: 16, margin: '0 auto', maxWidth: 800 }}>
      <CssBaseline />
      <Typography variant="h2" align="center" component="h1" gutterBottom>
        Login
      </Typography>
      <form name="form" onSubmit={handleSubmit}>
        <Grid item>
          <TextField
            name="username"
            fullWidth
            margin="normal"
            required
            value={username}
            onChange={handleChange}
            placeholder="E-mail"
            className={
              'form-control' + (submitted && !username ? ' is-invalid' : '')
            }
          />

          {submitted && !username && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </Grid>
        <Grid item>
          <TextField
            name="password"
            fullWidth
            placeholder="Password"
            margin="normal"
            required
            type="password"
            value={password}
            onChange={handleChange}
            className={
              'form-control' + (submitted && password ? ' is-invalid' : '')
            }
          />
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </Grid>
        <FormGroup>
          <Button variant="contained" color="primary" type="submit">
            {loggingIn && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Login
          </Button>
          <StyledLink to="/register" className="btn btn-link">
            Register
          </StyledLink>
        </FormGroup>
      </form>
    </div>
  );
}

export { LoginPage };
