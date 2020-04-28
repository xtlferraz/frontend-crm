import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import MaterialTable from 'material-table';

const User = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const columns = [
    { title: 'ID', field: 'id', editable: 'never' },
    { title: 'Nome', field: 'name' },
    { title: 'E-Mail', field: 'email' },
    { title: 'Password', field: 'password' },
  ];

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  return (
    <>
      <MaterialTable
        title="Usuários"
        columns={columns}
        data={users.items}
        editable={{
          onRowAdd: (user) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (user.name && user.email && user.password) {
                  dispatch(userActions.register(user));
                }
                dispatch(userActions.getAll());
              }, 600);
            }),
          onRowUpdate: (user) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (user.name && user.email && user.password) {
                  dispatch(userActions.update(user));
                }
                dispatch(userActions.getAll());
              }, 600);
            }),
          onRowDelete: (user) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                dispatch(userActions.delete(user.id));
              }, 600);
            }),
        }}
      />
    </>
  );
};

export { User };
