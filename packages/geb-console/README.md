# geb-console

## install 

```
npm install -g @reflexer-finance/geb-console
```

## Use

To start the console run the command:
```bash
geb-console

# Default network is kovan, to start it on mainnet run
geb-console mainnet

# To preload a private key, pass an env variable PK
PK=0xabc123... geb-console
```

Once loaded you should see:
```
🗿 > Welcome to geb-console!

Context objects:
- geb                   - ethers
- gebAdmin              - wallet
- contracts             - provider
- BigNumber             - wait(promise)
- ETH_A                 - WAD

🗿 > 
```

A few examples of what you can do in the JS console:
```js
// Fetch some system variables
// Hint: use TAB autocomplete to see what's available
🗿 > promise = geb.contracts.safeEngine.globalDebt()

// A wait() function is exposed to resolve promises 
🗿 > globalDebt = wait(promise)

// Print the BigNumber as string
🗿 > globalDebt.toString()
'600058105670389218985501651609537665157840485958'


// We expose the objects `ethers`, `provider` and `wallet` from the ether.js library
// Note that `wallet` is only defined if was started with a private key in the env variable PK=0xabc123.. 
🗿 > amount = ethers.utils.parseEther('1')

🗿 > wait(provider.getBlockNumber())
21375225

🗿 > wallet.address
'0x7eb8caf136Ba45DD16483188cbe8b615f6251ca7'


// Hint: use the `.type` command to see the prototype of a function
🗿 > .type geb.contracts.liquidationEngine.liquidateSAFE
(method) LiquidationEngine.liquidateSAFE(collateralType: ethers.utils.BytesLike, safe: string): TransactionRequest

// Contract interaction e.g: Manually liquidate a safe
🗿 > geb.contracts.liquidationEngine.liquidateSAFE(ETH_A, '0xc6a789e33b40b13144e21816b853744562686131')
{
  to: '0x84334811e26fc70cC5a68BB2878b0F18E278C397',
  data: '0x4c28be574554482d41000000000000000000000000000000000000000000000000000000000000000000000000000000c6a789e33b40b13144e21816b853744562686131',
  value: undefined
}

// The previous command created a transaction request object, now use the wallet to send the transaction
// Hint: use the underscore to refer to the previous command result
🗿 > wait(wallet.sendTransaction(_)).hash
'0xdef943abb1a9a65c44a5c3d8ac23e3b7448911f0c020375f936b38a84c2e6209' // We can check this hash on etherscan

// Hint: use the `.editor` command to paste a multiline command
// Hint: access all contract of the GEB system under `geb.contracts.` or `gebAdmin.contractsAdmin.`
// Hint: See geb.js docs https://docs.reflexer.finance/geb-js/geb-js-get-started
```



