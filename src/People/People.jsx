import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { peopleActions } from '../_actions';
import MaterialTable from 'material-table';

const People = () => {
  const peoples = useSelector((state) => state.peoples);
  const dispatch = useDispatch();

  const columns = [
    { title: 'ID', field: 'id', editable: 'never' },
    { title: 'Nome', field: 'name', editable: 'onUpdate' },
    { title: 'CPF', field: 'cpf', editable: 'onUpdate' },
    {
      title: 'Data de Nascimento',
      field: 'dtNascimento',
      editable: 'onUpdate',
    },
    { title: 'Sexo', field: 'sexo', editable: 'onUpdate' },
    { title: 'E-mail', field: 'email', editable: 'onUpdate' },
    { title: 'Usuário', field: 'user_id', editable: 'onUpdate' },
    { title: 'Ativo', field: 'active', editable: 'onUpdate' },
  ];

  useEffect(() => {
    dispatch(peopleActions.getAll());
  }, []);

  return (
    <>
      <MaterialTable
        title="Pessoas"
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
