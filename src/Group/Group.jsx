import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { groupActions } from '../_actions';
import MaterialTable from 'material-table';

const Group = () => {
  const groups = useSelector((state) => state.groups);
  const dispatch = useDispatch();

  const columns = [
    { title: 'ID', field: 'id', editable: 'never' },
    { title: 'Nome', field: 'name', editable: 'onUpdate' },
    { title: 'Permissão', field: 'role', editable: 'onUpdate' },
    { title: 'Usuário', field: 'user_id', editable: 'onUpdate' },
  ];

  useEffect(() => {
    dispatch(groupActions.getAll());
  }, []);

  return (
    <>
      <MaterialTable
        title="Grupos"
        columns={columns}
        data={groups.items}
        editable={{
          onRowAdd: (group) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (group.name && group.role) {
                  dispatch(groupActions.register(group));
                }
                dispatch(groupActions.getAll());
              }, 600);
            }),
          onRowUpdate: (group) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (group.name && group.role) {
                  dispatch(groupActions.update(group));
                }
                dispatch(groupActions.getAll());
              }, 600);
            }),
          onRowDelete: (group) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                dispatch(groupActions.delete(group.id));
              }, 600);
            }),
        }}
      />
    </>
  );
};

export { Group };
