import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
import Card from '@material-ui/core/Card';
import { CssBaseline } from '@material-ui/core';
import { peopleService } from '../_services';
import { useParams } from 'react-router';
import { peopleActions } from '../_actions';
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    padding: '20px',
  },
}));

const EditPeople = () => {
  const { editId } = useParams();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [peoples, setPeoples] = useState({});
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setPeoples({ ...peoples, [name]: value });
  };

  const onChangeHandler = (e) => {
    setPeoples({ ...peoples, ['logo']: e.target.files[0] || '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(peopleActions.update(peoples));
  };

  useEffect(async () => {
    const people = await peopleService.getById(editId);
    setPeoples(people.data.result);
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
          <Tab label="Pessoa" {...a11yProps(0)} />
          <Tab label="Endereço" {...a11yProps(1)} />
          <Tab label="Documentos" {...a11yProps(2)} />
          <Tab label="Perfil" {...a11yProps(3)} />
          <Tab label="Foto" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Card variant="outlined">
          <form noValidate>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Nome"
              type="text"
              onChange={handleChangeInput}
              value={peoples.name || ''}
              fullWidth
            />

            <TextField
              name="short_name"
              margin="dense"
              id="short_name"
              label="Nome Curto"
              type="text"
              onChange={handleChangeInput}
              value={peoples.short_name || ''}
              fullWidth
            />

            <TextField
              name="cpf"
              margin="dense"
              id="cpf"
              label="CPF"
              onChange={handleChangeInput}
              value={peoples.cpf || ''}
              type="text"
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
      <TabPanel value={value} index={1}>
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
              value={peoples.cep || ''}
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
              value={peoples.country || ''}
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
              value={peoples.state || ''}
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
              value={peoples.city || ''}
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
              value={peoples.neighborhood || ''}
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
              value={peoples.address || ''}
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
              value={peoples.complement || ''}
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
              value={peoples.rg || ''}
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
              value={peoples.rg || ''}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="cnh"
              name="cnh"
              label="CNH"
              type="text"
              onChange={handleChangeInput}
              value={peoples.cnh || ''}
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
              value={peoples.resume || ''}
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
              value={peoples.about || ''}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="profissional"
              name="profissional"
              label="Profissional "
              type="text"
              onChange={handleChangeInput}
              value={peoples.office || ''}
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
              value={peoples.object || ''}
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="curso"
              name="curso"
              label="Curso"
              type="text"
              onChange={handleChangeInput}
              value={peoples.formation || ''}
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
              value={peoples.institution || ''}
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
              value={peoples.office || ''}
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
              value={peoples.hobby || ''}
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
      <TabPanel value={value} index={4}>
        <Card variant="outlined">
          <form noValidate>
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
    </>
  );
};

export { EditPeople };
