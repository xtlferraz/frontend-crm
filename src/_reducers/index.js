import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { leads } from './leads.reducer';
import { alert } from './alert.reducer';
import { categorys } from './categorys.reducer';
import { companys } from './companys.reducer';
import { events } from './events.reducer';
import { peoples } from './peoples.reducer';
import { products } from './products.reducer';
import { services } from './services.reducer';
import { teams } from './teams.reducer';
import { groups } from './groups.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  leads,
  alert,
  categorys,
  companys,
  events,
  peoples,
  products,
  services,
  teams,
  groups,
});

export default rootReducer;
