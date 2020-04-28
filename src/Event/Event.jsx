import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eventActions } from '../_actions';
import MaterialTable from 'material-table';

const Event = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const columns = [
    { title: 'ID', field: 'id', editable: 'never' },
    { title: 'Nome', field: 'name' },
    { title: 'Descrição', field: 'description' },
    { title: 'Data de Inclusão', field: 'date_include' },
    { title: 'Equipe', field: 'team_id' },
    { title: 'Ativo', field: 'active' },
  ];

  useEffect(() => {
    dispatch(eventActions.getAll());
  }, []);

  return (
    <>
      <MaterialTable
        title="Eventos"
        columns={columns}
        data={events.items}
        editable={{
          onRowAdd: (event) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (event.name && event.description) {
                  dispatch(eventActions.register(event));
                }
                dispatch(eventActions.getAll());
              }, 600);
            }),
          onRowUpdate: (event) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (event.name && event.description) {
                  dispatch(eventActions.update(event));
                }
                dispatch(eventActions.getAll());
              }, 600);
            }),
          onRowDelete: (event) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                dispatch(eventActions.delete(event.id));
              }, 600);
            }),
        }}
      />
    </>
  );
};

export { Event };
