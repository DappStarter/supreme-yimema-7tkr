require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note toss color grace help equal general'; 
let testAccounts = [
"0x2a95bcff82d43be99ca78a65b07b9e16ee73eb2288df8020b707d6d788f39b4a",
"0x94f370bf5c1501e35de5287f2cc83b37b14d74c8ac1e9b23908bac4195473574",
"0x3f43e23af559f922768664c90e1f9a1a6e2fb37aa035435765ddb3ce1642afc1",
"0xdfcc28554e400310b8e81a2f6ada80cb3e0426a01db535c9365302b0c2eca593",
"0xa1d9e1ddf63926eef99d0caa09b58bbd6b098a188e9f20589b1464db7950e841",
"0xd77f09051edb6de0134fa847b438c4634055b6bfe74553c0a063f220b1a1ea44",
"0x00e2659bda6e65868b1166f2dd8a825d5a75a8d5058d54507abde404738ba98b",
"0xf1eb13e8a8bbf59574d963d9ac6b0b391fe1e5d62bb476573317651e814800d9",
"0x65a081a8ba4b4a5d10f19c7564b2f5e956cfaf26b5d291aa1d4a8fd8b5748a36",
"0xa610b31746b9fe00db682b546bca732aa83f8afe09cb656664b20730fd424ed0"
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

