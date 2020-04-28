import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../_actions';
import MaterialTable from 'material-table';

const Product = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const columns = [
    { title: 'ID', field: 'id', editable: 'never' },
    { title: 'Nome', field: 'name' },
    { title: 'Descrição', field: 'description' },
    { title: 'Image', field: 'image' },
    { title: 'Value', field: 'value' },
    { title: 'Categoria', field: 'category_id' },
    { title: 'Ativo', field: 'active' },
  ];

  useEffect(() => {
    dispatch(productActions.getAll());
  }, []);

  return (
    <>
      <MaterialTable
        title="Produtos"
        columns={columns}
        data={products.items}
        editable={{
          onRowAdd: (product) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (product.name && product.description) {
                  dispatch(productActions.register(product));
                }
                dispatch(productActions.getAll());
              }, 600);
            }),
          onRowUpdate: (product) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (product.name && product.description) {
                  dispatch(productActions.update(product));
                }
                dispatch(productActions.getAll());
              }, 600);
            }),
          onRowDelete: (product) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                dispatch(productActions.delete(product.id));
              }, 600);
            }),
        }}
      />
    </>
  );
};

export { Product };
