import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { companyActions } from '../_actions';
export default function CompanyDialog(props) {
  const { open, close } = props;
  const dispatch = useDispatch();
  const [company, setCompany] = useState({
    name: '',
    fantasy_name: '',
    cnpj: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((company) => ({ ...company, [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(companyActions.register(company));
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
          value={company.name}
          fullWidth
        />
        <TextField
          name="cnpj"
          margin="dense"
          id="cnpj"
          label="CNPJ"
          onChange={handleChange}
          value={company.cnpj}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="fantasy_name"
          name="fantasy_name"
          label="Nome Fantasia"
          type="text"
          onChange={handleChange}
          value={company.fantasy_name}
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
