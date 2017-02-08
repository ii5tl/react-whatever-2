import React, { Component } from 'react';
import {Apis} from 'graphenejs-ws';

export default class AssetList extends Component {
  constructor(prop) {
    super();
    this.state = {
      assets: [],
      witnesses:[]
    }
  }

  componentWillMount() {
    this._loadAssets("C", 100);

    this._loadWitnessAccount("C", 100);


  }


  _loadWitnessAccount(start, count) {
    Apis.instance().db_api().exec("lookup_witness_accounts", [start, count])
      .then(witnesses => {

        witnesses.forEach(witness => {



          // console.log(witness);
          let updated = this.state.witnesses.concat([witness]); //immutable!!
          this.setState({
            witnesses: updated
          });





        })
      });


  }

  _loadAssets(start, count) {
    Apis.instance().db_api().exec("list_assets", [start, count])
      .then(assets => {

        assets.forEach(asset => {



          console.log(asset);
          let updated = this.state.assets.concat([asset]); //immutable!!
          this.setState({
            assets: updated
          });





        })
      });


  }

  render() {
    return (
      <div className='asset_list'>
        <h1>Asset List</h1>
        <ul>
          {
            this.state.assets.map((asset) => {
              return <li key={asset.dynamic_asset_data_id}>{asset.symbol}</li>;
            })
          }
        </ul>

        <h1>Witness List</h1>
        <ul>
          {
            this.state.witnesses.map((witness) => {
              return <li key={witness.dynamic_asset_data_id}>{witness[0]}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}
