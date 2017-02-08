// var alt = require("../alt-instance");

export const CHANGE_SETTING = 'CHANGE_SETTING'
export const CHANGE_VIEW_SETTING = 'CHANGE_VIEW_SETTING'
export const ADD_WS = 'ADD_WS'
export const REMOVE_WS = 'REMOVE_WS'
export const INIT_SETTING = 'INIT_SETTING'
export const REMOVE_STAR_ACCOUNT = 'REMOVE_STAR_ACCOUNT'

export function initSetting(defaultSettings, marketsString, defaults) {
    return  {
        type: INIT_SETTING,
        defaultSettings,
        marketsString,
        defaults,
    };
}

export function changeSetting(value) {
    return  {
        type: CHANGE_SETTING,
        value
    }
}

export function changeViewSetting(value) {
    return  {
        type: CHANGE_VIEW_SETTING,
        value
    }
}

export function addWs(ws) {
    return  {
        type: ADD_WS,
        ws
    }
}

export function removeWs(index) {
    return  {
        type: REMOVE_WS,
        index
    }
}
