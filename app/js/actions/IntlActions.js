export const SWITCH_LOCALE = 'SWITCH_LOCALE'

// var locales = {};
// if (__ELECTRON__) {
//     ["cn", "de", "es", "fr","hi", "ko", "tr"].forEach(locale => {
//         locales[locale] = require("json!../assets/locales/locale-" + locale + ".json");
//     });
// }
export function triggerSwitchLocale(locale) {

    return (dispatch) =>
      fetch("/locale-" + locale + ".json").then( (reply) => {
              return reply.json().then(result => {
                  dispatch(switchLocale(locale,result));
          })})
          .catch(err => {
              console.log("fetch locale error:", err);
              dispatch(switchLocale("en",null)  );
          });


}


function switchLocale(locale, localeData) {
    return  {
        type: SWITCH_LOCALE,
        locale,
        localeData
    };
}




// class IntlActions {
//
//     switchLocale(locale) {
//         if (locale === "en") {
//             return this.dispatch({locale});
//         }
//         if (__ELECTRON__) {
//             this.dispatch({
//                 locale: locale,
//                 localeData: locales[locale]
//             });
//         } else {
//         	fetch("/locale-" + locale + ".json").then( (reply) => {
//                 return reply.json().then(result => {
//                     this.dispatch({
//                     	locale: locale,
//                     	localeData: result
//                     });
//             })})
//             .catch(err => {
//                 console.log("fetch locale error:", err);
//                 this.dispatch({locale: "en"});
//             });
//         }
//
//     }
//
//     getLocale(locale) {
//         this.dispatch(locale);
//     }
//
// }
//
// module.exports = IntlActions;//alt.createActions(IntlActions);
