import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { leadActions } from '../_actions';
import MaterialTable from 'material-table';

const Lead = () => {
  const leads = useSelector((state) => state.leads);
  const dispatch = useDispatch();

  const columns = [
    { title: 'ID', field: 'id', editable: 'never' },
    { title: 'Nome', field: 'name', editable: 'onUpdate' },
    { title: 'Descrição', field: 'description', editable: 'onUpdate' },
    { title: 'E-Mail', field: 'email', editable: 'onUpdate' },
    { title: 'Telefone', field: 'phone', editable: 'onUpdate' },
    { title: 'Mídia', field: 'midia', editable: 'onUpdate' },
    { title: 'Campanha', field: 'campaign', editable: 'onUpdate' },
    /* { title: 'Usuário', field: 'user_id', editable: 'onUpdate' },
    { title: 'Campanha', field: 'company_id', editable: 'onUpdate' },
    { title: 'Unidade', field: 'unity_id', editable: 'onUpdate' },
    { title: 'Produto', field: 'product_id', editable: 'onUpdate' },*/
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
