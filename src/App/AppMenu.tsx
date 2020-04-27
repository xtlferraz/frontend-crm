import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import IconDashboard from '@material-ui/icons/Dashboard';
import IconPeople from '@material-ui/icons/People';
import IconBarChart from '@material-ui/icons/BarChart';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';
import BusinessIcon from '@material-ui/icons/Business';
import CategoryIcon from '@material-ui/icons/Category';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import ContactsIcon from '@material-ui/icons/Contacts';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppMenuItem from './AppMenuItem';

const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: IconDashboard,
  },
  {
    name: 'Pessoa Jurídica',
    link: '/company',
    Icon: BusinessIcon,
  },
  {
    name: 'Pessoas',
    link: '/people',
    Icon: IconPeople,
  },
  {
    name: 'Categorias',
    link: '/category',
    Icon: CategoryIcon,
  },
  {
    name: 'Contatos',
    link: '/lead',
    Icon: ContactsIcon,
  },
  {
    name: 'Equipe',
    link: '/team',
    Icon: GroupWorkIcon,
  },
  {
    name: 'Eventos',
    link: '/event',
    Icon: EventIcon,
  },
  {
    name: 'Grupos',
    link: '/group',
    Icon: GroupIcon,
  },
  {
    name: 'Usuários',
    link: '/user',
    Icon: AccountCircleIcon,
  },
  {
    name: 'Reports',
    link: '/reports',
    Icon: IconBarChart,
  },
  {
    name: 'Nested Pages',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'Level 2',
      },
      {
        name: 'Level 2',
        items: [
          {
            name: 'Level 3',
          },
          {
            name: 'Level 3',
          },
        ],
      },
    ],
  },
];

const AppMenu: React.FC = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  })
);

export default AppMenu;
