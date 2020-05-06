import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { peopleActions } from '../_actions';
export default function FisicaDialog(props) {
  const { open, close } = props;
  const dispatch = useDispatch();
  const [people, setPeople] = useState({
    name: '',
    short_name: '',
    cpf: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPeople((people) => ({ ...people, [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(peopleActions.register(people));
    close();
  };

  return (
    <Dialog open={open} onClose={close} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Pessoa Física</DialogTitle>
      <DialogContent>
        <DialogContentText>Cadastro rápido de pessoa física</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Nome"
          type="text"
          onChange={handleChange}
          value={people.name}
          fullWidth
        />
        <TextField
          name="cpf"
          margin="dense"
          id="cpf"
          label="CPF"
          onChange={handleChange}
          value={people.cpf}
          type="text"
          fullWidth
        />
        <TextField
          name="short_name"
          margin="dense"
          id="short_name"
          label="Nome Curto"
          type="text"
          onChange={handleChange}
          value={people.short_name}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Cadastrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
