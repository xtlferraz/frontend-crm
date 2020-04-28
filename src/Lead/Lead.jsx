import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { leadActions } from '../_actions';
import MaterialTable from 'material-table';

const Lead = () => {
  const leads = useSelector((state) => state.leads);
  const dispatch = useDispatch();

  const columns = [
    { title: 'ID', field: 'id', editable: 'never' },
    { title: 'Nome', field: 'name' },
    { title: 'Descrição', field: 'description' },
    { title: 'E-Mail', field: 'email' },
    { title: 'Telefone', field: 'phone' },
    { title: 'Mídia', field: 'midia' },
    { title: 'Campanha', field: 'campaign' },
    /* { title: 'Usuário', field: 'user_id' },
    { title: 'Campanha', field: 'company_id' },
    { title: 'Unidade', field: 'unity_id' },
    { title: 'Produto', field: 'product_id' },*/
  ];

  useEffect(() => {
    dispatch(leadActions.getAll());
  }, []);

  return (
    <>
      <MaterialTable
        title="Leads"
        columns={columns}
        data={leads.items}
        editable={{
          onRowAdd: (lead) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (lead.name && lead.email) {
                  dispatch(leadActions.register(lead));
                }
                dispatch(leadActions.getAll());
              }, 600);
            }),
          onRowUpdate: (lead) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (lead.name && lead.email) {
                  dispatch(leadActions.update(lead));
                }
                dispatch(leadActions.getAll());
              }, 600);
            }),
          onRowDelete: (lead) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                dispatch(leadActions.delete(lead.id));
              }, 600);
            }),
        }}
      />
    </>
  );
};

export { Lead };
