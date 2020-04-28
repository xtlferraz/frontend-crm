import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryActions } from '../_actions';
import MaterialTable from 'material-table';

const Category = () => {
  const categorys = useSelector((state) => state.categorys);
  const dispatch = useDispatch();

  const columns = [
    { title: 'ID', field: 'id', editable: 'never' },
    { title: 'Nome', field: 'name' },
    { title: 'Descrição', field: 'description' },
    { title: 'Ative', field: 'active' },
  ];

  useEffect(() => {
    dispatch(categoryActions.getAll());
  }, []);

  return (
    <>
      <MaterialTable
        title="Categorias"
        columns={columns}
        data={categorys.items}
        editable={{
          onRowAdd: (category) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (category.name && category.description) {
                  dispatch(categoryActions.register(category));
                }
                dispatch(categoryActions.getAll());
              }, 600);
            }),
          onRowUpdate: (category) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (category.name && category.description) {
                  dispatch(categoryActions.update(category));
                }
                dispatch(categoryActions.getAll());
              }, 600);
            }),
          onRowDelete: (category) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                dispatch(categoryActions.delete(category.id));
              }, 600);
            }),
        }}
      />
    </>
  );
};

export { Category };
