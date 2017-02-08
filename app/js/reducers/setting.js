// var SettingsActions = require("../actions/SettingsActions");
var Immutable = require("immutable");
import {merge} from "lodash";
import ls from "../common/localStorage";
import * as types from '../actions/SettingsActions';

const CORE_ASSET = "BTS"; // Setting this to BTS to prevent loading issues when used with BTS chain which is the most usual case currently

const STORAGE_KEY = "__graphene__";
let ss = new ls(STORAGE_KEY);

let topMarkets = [
    "MKR", "OPEN.MKR", "BTS", "OPEN.ETH", "ICOO", "BTC", "OPEN.LISK",
    "OPEN.STEEM", "OPEN.DAO", "PEERPLAYS", "USD", "CNY", "BTSR", "OBITS",
    "OPEN.DGD", "EUR", "TRADE.BTC", "CASH.BTC", "GOLD", "SILVER",
    "OPEN.USDT", "OPEN.EURT", "OPEN.BTC", "CADASTRAL"
];


let apiServer = [
    {url: "wss://peerplays-dev.blocktrades.info/ws/", location: "US, East"}
];




const defaultSettings = Immutable.Map({
            locale: "en",
            // apiServer: "wss://peerplays-dev.blocktrades.info/ws/",
            apiServer: "wss://bitshares.openledger.info/ws",
            faucet_address: "https://peerplays-dev.blocktrades.info",
            unit: CORE_ASSET,
            showSettles: false,
            showAssetPercent: false,
            walletLockTimeout: 60 * 10,
            themes: "darkTheme",
            disableChat: false
        });




let defaults = {
    locale: [
        "en",
        "cn",
        "fr",
        "hi",
        "ko",
        "de",
        "es",
        "tr"
    ],
    apiServer: [],
    unit: [
        CORE_ASSET,
        "USD",
        "CNY",
        "BTC",
        "EUR",
        "GBP"
    ],
    showSettles: [
        {translate: "yes"},
        {translate: "no"}
    ],
    showAssetPercent: [
        {translate: "yes"},
        {translate: "no"}
    ],
    disableChat: [
        {translate: "yes"},
        {translate: "no"}
    ],
    themes: [
        "darkTheme",
        "lightTheme",
        "olDarkTheme"
    ],

    // confirmMarketOrder: [
    //     {translate: "confirm_yes"},
    //     {translate: "confirm_no"}
    // ]

};
let savedDefaults = ss.get("defaults_v1", {});
defaults = merge({}, defaults, savedDefaults);


let initialState = {
  defaultSettings: defaultSettings,
  settings: Immutable.Map(merge(defaultSettings.toJS(), ss.get("settings_v3"))),
  marketsString: "markets",
  topMarkets: topMarkets,
  preferredBases: Immutable.List([CORE_ASSET, "OPEN.BTC", "USD", "CNY", "BTC"]),
  defaults: defaults,
  viewSettings: Immutable.Map(ss.get("viewSettings_v1"))


};




export default function setting(state = initialState, action = {} ) {


  switch (action.type) {

    case types.INIT_SETTING:
      // console.log("INIT_SETTING INIT_SETTING");


      return Object.assign({}, state, {
        defaultSettings: action.defaultSettings,
        marketsString: action.marketsString,
        defaults: action.defaults,
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
