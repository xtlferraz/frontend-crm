import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  TextField,
  Grid,
  Button,
  Link,
  CssBaseline,
  Typography,
} from '@material-ui/core';

import { userActions } from '../_actions';

function RegisterPage() {
  const [user, setUser] = useState({
    firstName: '',
    username: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const registering = useSelector((state) => state.registration.registering);
  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (user.name && user.email && user.password) {
      dispatch(userActions.register(user));
    }
  }

  return (
    <div style={{ padding: 16, margin: '0 auto', maxWidth: 800 }}>
      <CssBaseline />
      <Typography variant="h2" align="center" component="h1" gutterBottom>
        Register
      </Typography>
      <form name="form" onSubmit={handleSubmit}>
        <Grid item>
          <TextField
            name="firstName"
            fullWidth
            placeholder="Nome"
            margin="normal"
            required
            onChange={handleChange}
            value={user.firstName}
            className={
              'form-control' +
              (submitted && !user.firstName ? ' is-invalid' : '')
            }
          />

          {submitted && !user.firstName && (
            <div className="invalid-feedback">First Name is required</div>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="lastName"
            fullWidth
            placeholder="Last Name"
            margin="normal"
            required
            onChange={handleChange}
            value={user.lastName}
            className={
              'form-control' +
              (submitted && !user.lastName ? ' is-invalid' : '')
            }
          />
          {submitted && !user.lastName && (
            <div className="invalid-feedback">Last Name is required</div>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="username"
            fullWidth
            placeholder="Username"
            margin="normal"
            required
            onChange={handleChange}
            value={user.username}
            className={
              'form-control' +
              (submitted && !user.username ? ' is-invalid' : '')
            }
          />
          {submitted && !user.username && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            placeholder="Password"
            margin="normal"
            required
            type="password"
            value={user.password}
            onChange={handleChange}
            className={
              'form-control' +
              (submitted && !user.password ? ' is-invalid' : '')
            }
          />

          {submitted && !user.password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </Grid>
        <div className="form-group">
          <Button variant="contained" color="primary" type="submit">
            {registering && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Register
          </Button>
          <Link to="/login" style={{ marginLeft: 10 }}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export { RegisterPage };
