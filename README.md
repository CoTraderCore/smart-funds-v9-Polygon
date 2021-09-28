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
Quick Swap v2 Router

0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff

Quick Swap Factory

0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32

Quick Swap Pair

0xadbF1854e5883eB8aa7BAf50705338739e558E5b

1inch AggregationRouterV3

0x11111112542D85B3EF69AE05771c2dCCff4fAa26
```
