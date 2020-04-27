import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { teamActions } from '../_actions';
import MaterialTable from 'material-table';

const Team = () => {
  const teams = useSelector((state) => state.teams);
  const dispatch = useDispatch();

  const columns = [
    { title: 'ID', field: 'id', editable: 'never' },
    { title: 'Nome', field: 'name', editable: 'onUpdate' },
    { title: 'Descrição', field: 'description', editable: 'onUpdate' },
    { title: 'Pessoal', field: 'people_id', editable: 'onUpdate' },
    { title: 'Ativo', field: 'active', editable: 'onUpdate' },
  ];

  useEffect(() => {
    dispatch(teamActions.getAll());
  }, []);

  return (
    <>
      <MaterialTable
        title="Equipe"
        columns={columns}
        data={teams.items}
        editable={{
          onRowAdd: (team) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (team.name && team.description && team.people_id) {
                  dispatch(teamActions.register(team));
                }
                dispatch(teamActions.getAll());
              }, 600);
            }),
          onRowUpdate: (team) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (team.name && team.description && team.people_id) {
                  dispatch(teamActions.update(team));
                }
                dispatch(teamActions.getAll());
              }, 600);
            }),
          onRowDelete: (team) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                dispatch(teamActions.delete(team.id));
              }, 600);
            }),
        }}
      />
    </>
  );
};

export { Team };
