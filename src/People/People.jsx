import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { peopleActions } from '../_actions';
import MaterialTable from 'material-table';

const People = () => {
  const peoples = useSelector((state) => state.peoples);
  const dispatch = useDispatch();

  const columns = [
    { title: 'ID', field: 'id', editable: 'never' },
    { title: 'Nome', field: 'name' },
    { title: 'CPF', field: 'cpf' },
    {
      title: 'Data de Nascimento',
      field: 'dtNascimento',
    },
    { title: 'Sexo', field: 'sexo' },
    { title: 'E-mail', field: 'email' },
    { title: 'Usuário', field: 'user_id' },
    { title: 'Ativo', field: 'active' },
  ];

  useEffect(() => {
    dispatch(peopleActions.getAll());
  }, []);

  return (
    <>
      <MaterialTable
        title="Físicas"
        columns={columns}
        data={peoples.items}
        editable={{
          onRowAdd: (people) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (people.name && people.email) {
                  dispatch(peopleActions.register(people));
                }
                dispatch(peopleActions.getAll());
              }, 600);
            }),
          onRowUpdate: (people) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (people.name && people.email) {
                  dispatch(peopleActions.update(people));
                }
                dispatch(peopleActions.getAll());
              }, 600);
            }),
          onRowDelete: (people) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                dispatch(peopleActions.delete(people.id));
              }, 600);
            }),
        }}
      />
    </>
  );
};

export { People };
