require("./assets/loader");
if (!window.Intl) { // Safari polyfill
    	require.ensure(['intl'], require => {
    	window.Intl = require('intl');
        Intl.__addLocaleData(require("./assets/intl-data/en.json"));
        require("./Main.jsx");
    });
} else {
  require("./Main.jsx");
}
// require("./Main.jsx");
