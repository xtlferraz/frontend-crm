import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { companyActions } from '../_actions';
import MaterialTable from 'material-table';

const Company = () => {
  const companys = useSelector((state) => state.companys);
  const dispatch = useDispatch();

  const columns = [
    { title: 'ID', field: 'id', editable: 'never' },
    { title: 'Nome', field: 'name', editable: 'onUpdate' },
    { title: 'CNPJ', field: 'cnpj', editable: 'onUpdate' },
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
    dispatch(companyActions.getAll());
  }, []);

  return (
    <>
      <MaterialTable
        title="Pessoas"
        columns={columns}
        data={companys.items}
        editable={{
          onRowAdd: (company) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (company.name && company.email) {
                  dispatch(companyActions.register(company));
                }
                dispatch(companyActions.getAll());
              }, 600);
            }),
          onRowUpdate: (company) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (company.name && company.email) {
                  dispatch(companyActions.update(company));
                }
                dispatch(companyActions.getAll());
              }, 600);
            }),
          onRowDelete: (company) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                dispatch(companyActions.delete(company.id));
              }, 600);
            }),
        }}
      />
    </>
  );
};

export { Company };
