import React from "react";
import { render } from 'react-dom'
import { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {merge} from "lodash";

import Settings from "../components/Settings/Settings";
import * as SettingsActions from '../actions/SettingsActions';

import { initSetting } from '../actions/SettingsActions';
import { switchLocale } from '../actions/IntlActions';

import ls from "../common/localStorage";
const STORAGE_KEY = "__graphene__";
let ss = new ls(STORAGE_KEY);
// import todoApp from './reducers'
// let store = createStore(todoApp

// function select(state) {
//   return { settingState: state.setting };
// }

function addMarkets(target, base, markets) {
        markets.filter(a => {
            return a !== base;
        }).forEach(market => {
            target.push([`${market}_${base}`, {"quote": market,"base": base}]);
        });
}


const propTypes = {
  dispatch: PropTypes.func.isRequired,
  settings: PropTypes.object,
  defaults: PropTypes.object,
  viewSettings: PropTypes.object,
  localesObject: PropTypes.object,
};


class SettingsContainer extends Component {

    //https://github.com/reactjs/redux/issues/239



    componentDidMount(){


      let savedDefaults = ss.get("defaults_v1", {});
      let updatedDefault = merge({}, this.props.defaults, savedDefaults);
      this.props.dispatch(initSetting(this.props.defaultSettings, this.props.marketsString, updatedDefault ));
      // this.props.dispatch(switchLocale("en"));

    }


    render() {
      // console.log(this.state);

        // console.log(this.props.settings);

        const {
          settings,
          defaults,
          viewSettings,
          localesObject,
        } = this.props;

        return (

                <Settings
                  settings={settings}
                defaults={defaults}
                viewSettings={viewSettings}
                localesObject={localesObject}
                 />
        );
    }
}

SettingsContainer.propTypes = propTypes;


function mapStateToProps(state) {
//   console.log(state);
//
// console.log(state.setting);


  return {
    settings: state.setting.settings,
    defaults: state.setting.defaults,
    viewSettings: state.setting.viewSettings,
    localesObject: state.setting.localesObject
    // authenticated: state.auth.authenticated,
    // gifs: state.gifs.favorites,
    // modalIsOpen: state.modal.modalIsOpen,
    // selectedGif: state.modal.selectedGif
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SettingsActions, dispatch)
  };
}
export default connect(mapStateToProps)(SettingsContainer);
