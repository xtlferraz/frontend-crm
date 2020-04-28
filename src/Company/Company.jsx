import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { companyActions } from '../_actions';
import MaterialTable from 'material-table';

const Company = () => {
  const companys = useSelector((state) => state.companys);
  const dispatch = useDispatch();

  const columns = [
    { title: 'ID', field: 'id', editable: 'never' },
    { title: 'Nome', field: 'name' },
    { title: 'CNPJ', field: 'cnpj' },
    {
      title: 'Data de Nascimento',
      field: 'dtNascimento',
      editable: 'onUpdate',
    },
    { title: 'Sexo', field: 'sexo' },
    { title: 'E-mail', field: 'email' },
    { title: 'Usuário', field: 'user_id' },
    { title: 'Ativo', field: 'active' },
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
