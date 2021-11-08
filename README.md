# Run tests

```
NOTE: in separate console

0) npm i
1) npm run ganache  
2) truffle test
```

# Updates

```
1) Add role swaper which can trade, pool and call defi protocols.
2) Fix manager take cut for case manager take cut on the best profit period when profit go up then go down.
3) Optimize gas (remove or cache global vars in functions), for funds with 5-10 and more tokens gas now in n x less.
4) Fund creator can change fund name.
5) Add any fund asset type.
6) Remove Pools and Defi call
7) Remove tokens type stotage track (because we use for now only erc20)
8) Protect manager takeCut from flash loan atack
```



# Mainent deploy note

```
Don't forget add new addresses to new permittedAddresses contract
Don't forget set latest 1inch contract
```


# Addresses

```
Latest strategy with QUICK

0x8405C2C4214bA5d17230b558f6e2116C2f72C75c

QUICK

0x831753DD7087CaC61aB5644b308642cc1c33Dc13


QUICK / DAI pool address 

0x02E0e14D65175420fB12AcD325A7Be456bc22005


FUND

0x9579dB24ad3791Fe6dFb5212a0a126681F242d26

ROUTER

0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff


Manager Status

0x3ffa0CbFEf7E3a0112CCf7333193ac849248F375


UNIBuyLowSellHigh USD

0x10f02A8aEd8CBa0EF5D13030312dac1F41a39410


UNIBuyLowSellHigh

0xcCb6973225FE7e61B97E0fe1a7822EEc56884d92

UNISWAP POS (Polygon)

0xb33eaad8d922b1083446dc23f610c2567fb5180f

UNI Pos/WMATIC pair

0xc45092e7e73951c6668f6C46AcFCa9F2B1c69aEf

DAI

0x8f3cf7ad23cd3cadbd9735aff958023239c6a063

WMATIC

0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270

Quick Swap v2 Router

0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff

Quick Swap Factory

0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32

Quick Swap Pair

0xadbF1854e5883eB8aa7BAf50705338739e558E5b

1inch AggregationRouterV3

0x11111112542D85B3EF69AE05771c2dCCff4fAa26

Price Portal UNI

0x6d85Dd4672AFad01a28bdfA8b4323bE910999954

https://polygonscan.com/tx/0x11b9ef8f268902fb9bccee82cc230487bdf69ee53a82493085286cca9d50452f

Merkle Tree

https://polygonscan.com/address/0x666CAe17452Cf2112eF1479943099320AFD16d47#code

0x666CAe17452Cf2112eF1479943099320AFD16d47


Exchange Portal Light

https://polygonscan.com/address/0x2b4ba0a92ccc11e839d1928ae73b34e7aac2c040#code

0x2b4ba0A92CcC11E839d1928ae73b34E7aaC2C040


Permitted Addresses

https://polygonscan.com/address/0xc8a2ba3e9ce03f78551d7de5706cc275d4d3130f#code

0xC8A2Ba3E9CE03f78551d7dE5706Cc275d4D3130f


Smart Funds ETH Factory

https://polygonscan.com/address/0x3ae392a4c6a99fcb991e208f9d74618fff513834#code

0x3aE392A4c6a99FcB991E208f9D74618fff513834


Smart Funds ERC20 Factory

https://polygonscan.com/address/0x6f553184c04a4ad0b3551a4ff60fb73bb6e90408#code

0x6F553184C04a4aD0b3551A4ff60FB73BB6E90408

Smart Funds Registry

https://polygonscan.com/tx/0x81de724e77a9adaa933b1cc12a4ae16b2517c723ad5c25ee129703b95e917db6

0x992F6c414A6DA6A7470dfB9D61eFc6639e9fbb0E



Price Portal connectors (WMATIC, DAI)

["0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063"]

Merkle Tree Tokens White List Root Hash

0x579bd7fc66268dda4db21d9f92fb57d2eb0ca62261f2e670f9b463bd34669e5e
```
