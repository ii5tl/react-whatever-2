import * as types from '../actions/IntlActions';

var counterpart = require("counterpart");


import {addLocaleData} from 'react-intl';

import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import hi from 'react-intl/locale-data/hi';
import ko from 'react-intl/locale-data/ko';
import zh from 'react-intl/locale-data/zh';
import de from 'react-intl/locale-data/de';
import tr from 'react-intl/locale-data/tr';

addLocaleData(en);
addLocaleData(es);
addLocaleData(fr);
addLocaleData(hi);
addLocaleData(ko);
addLocaleData(zh);
addLocaleData(de);
addLocaleData(tr);

export default function intl(state = {}, action = {} ) {


  switch (action.type) {



    case types.SWITCH_LOCALE:
        console.log(" swithcing locale");
        counterpart.registerTranslations(action.locale, action.localeData);
    return Object.assign({}, state, {
       locale: action.locale,
       localeData: action.localeData
     });


    //
    // case SettingsActions:
    //   return Object.assign({}, state, {
    //     location: action.location
    //   });
    // case 'SET_DATA':
    //   return Object.assign({}, state, {
    //     data: action.data
    //   });
    // case 'SET_DATES':
    //   return Object.assign({}, state, {
    //     dates: action.dates
    //   });
    // case 'SET_TEMPS':
    //   return Object.assign({}, state, {
    //     temps: action.temps
    //   });

    default:
      return state;
  }
}
