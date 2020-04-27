import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { serviceActions } from '../_actions';
import MaterialTable from 'material-table';

const Service = () => {
  const services = useSelector((state) => state.services);
  const dispatch = useDispatch();

  const columns = [
    { title: 'ID', field: 'id', editable: 'never' },
    { title: 'Nome', field: 'name', editable: 'onUpdate' },
    { title: 'Descrição', field: 'description', editable: 'onUpdate' },
    { title: 'Hora', field: 'time_hour', editable: 'onUpdate' },
    { title: 'Valor', field: 'value_hour', editable: 'onUpdate' },
    { title: 'Categoria', field: 'category_id', editable: 'onUpdate' },
    { title: 'Ativo', field: 'active', editable: 'onUpdate' },
  ];

  useEffect(() => {
    dispatch(serviceActions.getAll());
  }, []);

  return (
    <>
      <MaterialTable
        title="Serviços"
        columns={columns}
        data={services.items}
        editable={{
          onRowAdd: (service) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (service.name && service.description) {
                  dispatch(serviceActions.register(service));
                }
                dispatch(serviceActions.getAll());
              }, 600);
            }),
          onRowUpdate: (service) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (service.name && service.description) {
                  dispatch(serviceActions.update(service));
                }
                dispatch(serviceActions.getAll());
              }, 600);
            }),
          onRowDelete: (service) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                dispatch(serviceActions.delete(service.id));
              }, 600);
            }),
        }}
      />
    </>
  );
};

export { Service };
