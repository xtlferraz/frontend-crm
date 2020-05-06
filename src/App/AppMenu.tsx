import React from 'react';
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
    name: 'Cadastros',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'Pessoas',
        items: [
          {
            name: 'Física',
            link: '/people',
          },
          {
            name: 'Jurídica',
            link: '/company',
          },
        ],
      },
    ],
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
];

const AppMenu: React.FC = () => {
  return (
    <List component="nav" disablePadding>
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  );
};

export default AppMenu;
