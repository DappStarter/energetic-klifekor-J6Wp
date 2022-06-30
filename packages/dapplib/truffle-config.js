require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million pulp hockey enroll off struggle'; 
let testAccounts = [
"0x294e80edbf4d0fe7b30f125e387fcf0e0de1a9cdc4a34007b1eac0cd1d14fa0b",
"0x3316aa6900ea23675a1dde7e35867b0baf62c2e0b379012320d19b7f86fcaddc",
"0xa63d38ae68b8ba0b0fac8c6610f17d9b701831c735a4109f05044a27533b54c9",
"0x5f5812811289b8217cd24e022a7b72acc681d65626145b6f72fb642b4b08a693",
"0x97d108cc928966df65289ef2df1a7e0876955a7e7290fd67ca52859dbfca201f",
"0x923e8611ac10b4cf99a084eedf6f0613a8b02835743e7990271b3f52d9afda73",
"0x72b7651319ccb9984b102c581d8e5e621dfe447a732b99bd9afe6ed157de904b",
"0x77197e615ea6c0f054dc7de00c1f1f12054cbb1fdf69c6fcf2469e631e1a0982",
"0x477640199c19c598595c21fad099d0cb5ffa2047bd0ba289f0082c7528e20a7b",
"0x863ff756f98b25a4d4990d7e946a60db21427982d0f207a840f49587c08d7a3a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

