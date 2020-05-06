import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { peopleActions } from '../_actions';
import MaterialTable from 'material-table';
import FisicaDialog from '../_components/FisicaDialog';
import { useHistory } from 'react-router-dom';
const People = () => {
  const peoples = useSelector((state) => state.peoples);
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    history.push('/people');
  };

  const handleClick = () => {
    setOpen(true);
  };

  const columns = [
    { title: 'ID', field: 'id', editable: 'never' },
    { title: 'Nome', field: 'name' },
    { title: 'CPF', field: 'cpf' },
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
    dispatch(peopleActions.getAll());
  }, []);

  return (
    <>
      <MaterialTable
        title="Físicas"
        columns={columns}
        data={peoples.items}
        actions={[
          {
            icon: 'add',
            tooltip: 'Add Pessoa',
            isFreeAction: true,
            onClick: () => handleClick(),
          },
        ]}
        editable={{
          onRowUpdate: (people) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (people.name) {
                  dispatch(peopleActions.update(people));
                }
                dispatch(peopleActions.getAll());
              }, 600);
            }),
          onRowDelete: (people) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                dispatch(peopleActions.delete(people.id));
              }, 600);
            }),
        }}
      />
      <FisicaDialog open={open} close={handleClose}></FisicaDialog>
    </>
  );
};

export { People };
