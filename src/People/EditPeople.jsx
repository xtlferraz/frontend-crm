import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { peopleActions } from '../_actions';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  input: {
    display: 'none',
  },
}));

const EditPeople = () => {
  const peoples = useSelector((state) => state.peoples);
  const dispatch = useDispatch();

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [people, setPeople] = useState({
    name: '',
    short_name: '',
    cpf: '',
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setPeople((people) => ({ ...people, [name]: value }));
  }

  useEffect(() => {
    dispatch(peopleActions.getAll());
  }, []);

  return (
    <>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Pessoa" {...a11yProps(0)} />
          <Tab label="Endereço" {...a11yProps(1)} />
          <Tab label="Documentos" {...a11yProps(2)} />
          <Tab label="Perfil" {...a11yProps(3)} />
          <Tab label="Foto" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography variant="h2" align="center" component="h1" gutterBottom>
          Pessoa
        </Typography>

        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Nome"
          type="text"
          onChange={handleChangeInput}
          value={people.name}
          fullWidth
        />

        <TextField
          name="short_name"
          margin="dense"
          id="short_name"
          label="Nome Curto"
          type="text"
          onChange={handleChangeInput}
          value={people.short_name}
          fullWidth
        />

        <TextField
          name="cpf"
          margin="dense"
          id="cpf"
          label="CPF"
          onChange={handleChangeInput}
          value={people.cpf}
          type="text"
          fullWidth
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h2" align="center" component="h1" gutterBottom>
          Endereço
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="cep"
          name="cep"
          label="Cep"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="pais"
          name="pais"
          label="País"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="uf"
          name="uf"
          label="Estado"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="city"
          name="city"
          label="Cidade"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="bairro"
          name="bairro"
          label="Bairro"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="rua"
          name="rua"
          label="Rua"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="complemento"
          name="complemento"
          label="Complemento"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h2" align="center" component="h1" gutterBottom>
          Documentos
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="rg"
          name="rg"
          label="Identidade"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="orgao"
          name="orgao"
          label="Orgão Expedidor"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="uf"
          name="uf"
          label="Estado"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="h2" align="center" component="h1" gutterBottom>
          Perfil
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="resumo"
          name="resumo"
          label="Resumo - sobre a sua atividade"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="sobre"
          name="sobre"
          label="Sobre - fale sobre sua experiência"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="profissional"
          name="profissional"
          label="Profissional - fale sobre sua experiência "
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="objetivo"
          name="objetivo"
          label="Objetivos - fale sobre seu objetivo"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
        <Typography variant="h2" align="center" component="h1" gutterBottom>
          Formação
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="curso"
          name="curso"
          label="Curso"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="universidade"
          name="universidade"
          label="Universidade"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />

        <TextField
          autoFocus
          margin="dense"
          id="cargo"
          name="cargo"
          label="Cargo"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />

        <TextField
          autoFocus
          margin="dense"
          id="hobby"
          name="hobby"
          label="Hobby"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </TabPanel>
    </>
  );
};

export { EditPeople };
