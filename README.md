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


Price Portal connectors (WMATIC, DAI)

["0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063"]

Merkle Tree Tokens White List Root Hash

0x579bd7fc66268dda4db21d9f92fb57d2eb0ca62261f2e670f9b463bd34669e5e
```
