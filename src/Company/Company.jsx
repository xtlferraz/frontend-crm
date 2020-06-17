import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { companyActions } from '../_actions';
import MaterialTable from 'material-table';
import { useHistory } from 'react-router-dom';
import CompanyDialog from '../_components/CompanyDialog';
const Company = () => {
  const companys = useSelector((state) => state.companys);
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    history.push('/company');
  };

  const columns = [
    { title: 'ID', field: 'id', editable: 'never' },
    { title: 'Nome', field: 'name' },
    { title: 'CNPJ', field: 'cnpj' },
    {
      title: 'Data de Nascimento',
      field: 'dtNascimento',
    },
    { title: 'Sexo', field: 'sexo' },
    { title: 'E-mail', field: 'email' },
    { title: 'Usuário', field: 'user_id' },
    { title: 'Ativo', field: 'active' },
  ];

  useEffect(() => {
    dispatch(companyActions.getAll());
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <MaterialTable
        title="Jurídicas"
        columns={columns}
        data={companys.items}
        actions={[
          {
            icon: 'add',
            tooltip: 'Add Company',
            isFreeAction: true,
            onClick: () => handleClick(),
          },
          {
            icon: 'edit',
            tooltip: 'Edit User',
            onClick: (event, rowData) =>
              history.push(`/company/edit/${rowData.id}`),
          },
        ]}
        editable={{
          onRowDelete: (company) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                dispatch(companyActions.delete(company.id));
              }, 600);
            }),
        }}
      />
      <CompanyDialog open={open} close={handleClose}></CompanyDialog>
    </>
  );
};

export { Company };
