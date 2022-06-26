require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/6Q7xSek38iv5GjmlPyx06It7y7vO5nrq',
      accounts: ['ab401b6364f1915e848d8eb389f430d02f8718d4f9940bb6709c655c82d67128'],
    },
  },
};
