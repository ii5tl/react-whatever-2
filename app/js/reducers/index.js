import { combineReducers } from 'redux';
// import AuthReducer from './auth';
// import GifsReducer from './gifs';
// import ModalReducer from './modal';
// import { reducer as FormReducer } from 'redux-form';
import SettingReducer from './setting';
import IntlReducer from './intl';
import environment from './environment';

const rootReducer = combineReducers({
  // auth: AuthReducer,
  // form: FormReducer,
  // gifs: GifsReducer,
  // modal: ModalReducer
  intl: IntlReducer,
  setting: SettingReducer,
  environment: environment
});

export default rootReducer;
