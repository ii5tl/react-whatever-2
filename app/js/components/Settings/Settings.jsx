import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SettingsEntry from "./SettingsEntry";
import Translate from "react-translate-component";
// import IntlActions from "actions/IntlActions";

// import SettingsActions from "../../actions/SettingsActions";
import { changeViewSetting } from '../../actions/SettingsActions';


const propTypes = {
  changeMenu: PropTypes.func,

};
class Settings extends Component {

  constructor(props) {
      super(props);



      this.state = {
                apiServer: props.settings.get("apiServer"),
                activeSetting: props.viewSettings.get("activeSetting", 0),
                menuEntries: [
                    "general",
                    "wallet",
                    "accounts",
                    "password",
                    "backup",
                    "restore",
                    "access"
                ],
                settingEntries: {
                    general: ["locale", "unit", "showSettles", "walletLockTimeout", "themes",
                    "disableChat", "showAssetPercent"],
                    access: ["apiServer", "faucet_address"]
                }
            };
  }

  changeMenu(entry) {
    let index = this.state.menuEntries.indexOf(entry);
    this.setState({
        activeSetting: index
    });
    changeViewSetting({activeSetting: index});
}



  render() {


        let {settings, defaults} = this.props;


        // console.log(this.state);

        let {menuEntries, activeSetting, settingEntries} = this.state;

        let entries;
        let activeEntry = menuEntries[activeSetting];

        // console.log("active entry : " + activeEntry);

        switch (activeEntry) {

        // case "accounts":
        //     entries = <AccountsSettings />;
        //     break;
        //
        // case "wallet":
        //     entries = <WalletSettings />;
        //     break;
        //
        // case "password":
        //     entries = <PasswordSettings />;
        //     break;
        //
        // case "backup":
        //     entries = <BackupSettings />;
        //     break;
        //
        // case "restore":
        //     entries = <RestoreSettings />;
        //     break;

        default:
          // console.log("settingEntries: " + settingEntries);

            entries = settingEntries[activeEntry].map(setting => {
                return (
                    <SettingsEntry
                        key={setting}
                        setting={setting}
                        settings={settings}

                        defaults={defaults[setting]}
                        // onChange={this._onChangeSetting.bind(this)}
                        // locales={this.props.localesObject}
                        // triggerModal={this.triggerModal.bind(this)}
                        {...this.state}
                    />);
            });
            // console.log("entries: " + entries);

            break;
        }

        return (
            <div className="grid-block page-layout">
                <div className="grid-block main-content wrap" style={{marginTop: "1rem"}}>
                    <div className="grid-content large-offset-2 shrink" style={{paddingRight: "4rem"}}>

                        <ul className="settings-menu">
                            {menuEntries.map((entry, index) => {
                              // return <li className={index === activeSetting ? "active" : ""} onClick={this._onChangeMenu.bind(this, entry)} key={entry}><Translate content={"settings." + entry} /></li>;
                                const changeMenuFunc = this.changeMenu.bind(this, entry);
                                return <li className={index === activeSetting ? "active" : ""} onClick={changeMenuFunc} key={entry}><Translate content={"settings." + entry} /></li>;
                            })}
                        </ul>
                    </div>

                    <div className="grid-content">
                        <div className="grid-block small-10 no-padding no-margin vertical">
                          <Translate component="h3" content={"settings." + menuEntries[activeSetting]} />

                            {entries}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Settings.propTypes = propTypes;

export default Settings;
