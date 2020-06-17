import React, { useEffect, useState, useCallback } from 'react';
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
import { CssBaseline } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useParams } from 'react-router';
import { companyService } from '../_services';
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
          <Typography component={'span'}>{children}</Typography>
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    padding: '20px',
  },
}));

const EditCompany = () => {
  const dispatch = useDispatch();

  const { editId } = useParams();

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [companys, setCompanys] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(async () => {
    const company = await companyService.getById(editId);
    setCompanys(company.data.result);
  }, []);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setCompanys({ ...companys, [name]: value });
  };

  const onChangeHandler = (e) => {
    setCompanys({ ...companys, ['logo']: e.target.files[0] || '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(companyActions.update(companys));
  };

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
        <Card variant="outlined">
          <form noValidate>
            <TextField
              margin="dense"
              id="name"
              name="name"
              label="Nome"
              type="text"
              onChange={handleChangeInput}
              value={companys.name || ''}
              fullWidth
            />
            <TextField
              name="cnpj"
              margin="dense"
              id="cnpj"
              label="CNPJ"
              onChange={handleChangeInput}
              value={companys.cnpj || ''}
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
              value={companys.fantasy_name || ''}
              fullWidth
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Cadastrar
            </Button>
          </form>
        </Card>
      </TabPanel>
      <TabPanel component={'span'} value={value} index={1}>
        <Card variant="outlined">
          <form noValidate>
            <TextField
              autoFocus
              margin="dense"
              id="cep"
              name="cep"
              label="Cep"
              type="text"
              onChange={handleChangeInput}
              value={companys.cep}
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
              value={companys.country}
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
              value={companys.state}
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
              value={companys.city}
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
              value={companys.neighborhood}
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
              value={companys.address}
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
              value={companys.address}
              fullWidth
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cadastrar
            </Button>
          </form>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Card variant="outlined">
          <form noValidate>
            <TextField
              autoFocus
              margin="dense"
              id="rg"
              name="rg"
              label="Identidade"
              type="text"
              onChange={handleChangeInput}
              value={companys.state_registration}
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
              value={companys.city_registration}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cadastrar
            </Button>
          </form>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Card variant="outlined">
          <form noValidate>
            <TextField
              autoFocus
              margin="dense"
              id="resumo"
              name="resumo"
              label="Resumo"
              type="text"
              onChange={handleChangeInput}
              value={companys.resume}
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
              value={companys.about}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="mission"
              name="mission"
              label="Missão"
              type="text"
              onChange={handleChangeInput}
              value={companys.mission}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="values"
              name="values"
              label="Valor"
              type="text"
              onChange={handleChangeInput}
              value={companys.values}
              fullWidth
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cadastrar
            </Button>
          </form>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Card variant="outlined">
          <form noValidate>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              name="logo"
              onChange={onChangeHandler}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cadastrar
            </Button>
          </form>
        </Card>
      </TabPanel>
    </>
  );
};

export { EditCompany };
