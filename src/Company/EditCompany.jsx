import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { companyActions } from '../_actions';
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
import {
  CssBaseline,
} from '@material-ui/core';
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

const EditCompany = () => {
  const companys = useSelector((state) => state.companys);
  const dispatch = useDispatch();

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [company, setCompany] = useState({
    name: '',
    fantasy_name: '',
    cnpj: '',
  });


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setCompany((company) => ({ ...company, [name]: value }));
  }

  useEffect(() => {
    dispatch(companyActions.getAll());
  }, []);

  return (
    <>
    <CssBaseline />
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
          <Tab label="Empresa" {...a11yProps(0)} />
          <Tab label="Endereço" {...a11yProps(1)} />
          <Tab label="Documentos" {...a11yProps(2)} />
          <Tab label="Perfil" {...a11yProps(3)} />
          <Tab label="Logo" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>

        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Nome"
          type="text"
          onChange={handleChangeInput}
          value={company.name}
          fullWidth
        />
        <TextField
          name="cnpj"
          margin="dense"
          id="cnpj"
          label="CNPJ"
          onChange={handleChangeInput}
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
          onChange={handleChangeInput}
          value={company.fantasy_name}
          fullWidth
        />

      </TabPanel>
      <TabPanel value={value} index={1}>

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
        <TextField
          autoFocus
          margin="dense"
          id="resumo"
          name="resumo"
          label="Resumo"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="sobre"
          name="sobre"
          label="Sobre"
          type="text"
          onChange={handleChangeInput}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="objetivo"
          name="objetivo"
          label="Objetivos"
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

export { EditCompany };
