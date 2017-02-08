import React, { Component } from 'react';
import ReactDOM from "react-dom";

import {Router, Route, IndexRoute, Redirect} from "react-router";
import createBrowserHistory from "history/lib/createHashHistory";
import {Apis} from 'graphenejs-ws';
import AssetList from './components/AssetList/AssetList';
import SettingsContainer from "./containers/SettingsContainer";
import SoundPlayerContainer from "./containers/SoundPlayerContainer";

// import AccountPage from "./components/Account/AccountPage";
import IntlActions from "./actions/IntlActions";
// import {IntlProvider} from "react-intl";

import {Provider} from 'react-redux';

let history = createBrowserHistory({ queryKey: false });


//////////////////////////////////////////

export default class Main extends Component {




  render() {
    return this.props.children;
  }
}


//////////////////////////////////////////

let updateListener = function(object) {
  // console.log("set_subscribe_callback:\n", object);s
// get_chain_properties


// Apis.instance().db_api().exec("cancel_all_subscriptions", []);


// Apis.instance().db_api().exec("cancel_all_subscriptions");
}

let initializer = (nextState, replaceState, callback) => {
  Apis.instance("wss://bitshares.openledger.info/ws", true).init_promise.then((res) => {
    console.log("Connected to: ", res[0]);
    Apis.instance().db_api().exec("set_subscribe_callback", [updateListener, true]);
    return callback();


  });
  // return callback();

}

let routes = (

  <Route path="/" component={Main} onEnter={initializer}>
    <IndexRoute component={AssetList}/>
    <Route path="settings" component={SettingsContainer}/>
    <Route path="players" component={SoundPlayerContainer}/>
    {/* <Route path="/account/:account_name" component={AccountPage}>
    <IndexRoute component={AccountOverview}/>
          <Route path="overview" component={AccountOverview}/> */}
          {/* <Route path="assets" component={AccountAssets}/>
          <Route path="tournaments" component={AccountTournaments}/>
          <Route path="create-asset" component={AccountAssetCreate}/>
          <Route path="update-asset/:asset" component={AccountAssetUpdate}/>
          <Route path="member-stats" component={AccountMembership}/>
          <Route path="vesting" component={AccountVesting}/>
          <Route path="permissions" component={AccountPermissions}/>
          <Route path="voting" component={AccountVoting}/>
          <Route path="deposit-withdraw" component={AccountDepositWithdraw}/>
          <Route path="orders" component={AccountOrders}/>
          <Route path="whitelist" component={AccountWhitelist}/> */}
      {/* </Route> */}
  </Route>
)
import configureStore from './stores/configureStore';

const store = configureStore();
// let store = createStore(reducer)


ReactDOM.render(
  <Provider store={store}>
  <Router history={history} routes={routes}/>
  </Provider>,

  document.getElementById("app"));
