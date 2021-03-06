import Web3 from "web3";

declare const web3;
declare const ethereum;

export class Web3Provider {
  static web3: Web3 = null;
  static ethereum = null;
  static isWeb3: boolean = false;
  static isEthereum = null;

  // MetaMaskで注入されたweb3を初期化
  static async setWeb3() {
    if ( typeof web3 !== 'undefined' ) {
      console.log('set Web3');
      Web3Provider.web3 = new Web3( web3.currentProvider );

    } else {
      console.log('no web3');
    }
    if ( typeof ethereum !== 'undefined' ) {
      console.log('set ethereum');
      Web3Provider.ethereum = ethereum;

    } else {
      console.log('no web3');
    }
  }

}
