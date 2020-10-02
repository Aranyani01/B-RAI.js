/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { MulticallRequest } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class FixedDiscountCollateralAuctionHouse extends BaseContractAPI {
    AUCTION_HOUSE_TYPE(): Promise<string>
    AUCTION_HOUSE_TYPE(multicall: true): MulticallRequest<string>
    AUCTION_HOUSE_TYPE(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"AUCTION_HOUSE_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    AUCTION_TYPE(): Promise<string>
    AUCTION_TYPE(multicall: true): MulticallRequest<string>
    AUCTION_TYPE(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"AUCTION_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    addAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    amountToRaise(id: BigNumberish): Promise<BigNumber>
    amountToRaise(
        id: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    amountToRaise(
        id: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"amountToRaise","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [id], multicall)
    }

    auctionsStarted(): Promise<BigNumber>
    auctionsStarted(multicall: true): MulticallRequest<BigNumber>
    auctionsStarted(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"auctionsStarted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    authorizedAccounts(address: string): Promise<BigNumber>
    authorizedAccounts(
        address: string,
        multicall: true
    ): MulticallRequest<BigNumber>
    authorizedAccounts(
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"authorizedAccounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address], multicall)
    }

    bidAmount(id: BigNumberish): Promise<BigNumber>
    bidAmount(id: BigNumberish, multicall: true): MulticallRequest<BigNumber>
    bidAmount(
        id: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"bidAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [id], multicall)
    }

    bids(
        uinteger: BigNumberish
    ): Promise<{
        raisedAmount: BigNumber
        soldAmount: BigNumber
        amountToSell: BigNumber
        amountToRaise: BigNumber
        auctionDeadline: number
        forgoneCollateralReceiver: string
        auctionIncomeRecipient: string
    }>
    bids(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<{
        raisedAmount: BigNumber
        soldAmount: BigNumber
        amountToSell: BigNumber
        amountToRaise: BigNumber
        auctionDeadline: number
        forgoneCollateralReceiver: string
        auctionIncomeRecipient: string
    }>
    bids(
        uinteger: BigNumberish,
        multicall?: true
    ):
        | Promise<{
              raisedAmount: BigNumber
              soldAmount: BigNumber
              amountToSell: BigNumber
              amountToRaise: BigNumber
              auctionDeadline: number
              forgoneCollateralReceiver: string
              auctionIncomeRecipient: string
          }>
        | MulticallRequest<{
              raisedAmount: BigNumber
              soldAmount: BigNumber
              amountToSell: BigNumber
              amountToRaise: BigNumber
              auctionDeadline: number
              forgoneCollateralReceiver: string
              auctionIncomeRecipient: string
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bids","outputs":[{"internalType":"uint256","name":"raisedAmount","type":"uint256"},{"internalType":"uint256","name":"soldAmount","type":"uint256"},{"internalType":"uint256","name":"amountToSell","type":"uint256"},{"internalType":"uint256","name":"amountToRaise","type":"uint256"},{"internalType":"uint48","name":"auctionDeadline","type":"uint48"},{"internalType":"address","name":"forgoneCollateralReceiver","type":"address"},{"internalType":"address","name":"auctionIncomeRecipient","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    buyCollateral(id: BigNumberish, wad: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"buyCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id, wad])
    }

    collateralFSM(): Promise<string>
    collateralFSM(multicall: true): MulticallRequest<string>
    collateralFSM(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"collateralFSM","outputs":[{"internalType":"contract OracleLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    collateralMedian(): Promise<string>
    collateralMedian(multicall: true): MulticallRequest<string>
    collateralMedian(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"collateralMedian","outputs":[{"internalType":"contract OracleLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    collateralType(): Promise<string>
    collateralType(multicall: true): MulticallRequest<string>
    collateralType(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"collateralType","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    discount(): Promise<BigNumber>
    discount(multicall: true): MulticallRequest<BigNumber>
    discount(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"discount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    forgoneCollateralReceiver(id: BigNumberish): Promise<string>
    forgoneCollateralReceiver(
        id: BigNumberish,
        multicall: true
    ): MulticallRequest<string>
    forgoneCollateralReceiver(
        id: BigNumberish,
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"forgoneCollateralReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [id], multicall)
    }

    getCollateralBought(
        id: BigNumberish,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"getCollateralBought","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id, wad])
    }

    getDiscountedCollateralPrice(
        collateralFsmPriceFeedValue: BigNumberish,
        collateralMedianPriceFeedValue: BigNumberish,
        systemCoinPriceFeedValue: BigNumberish,
        customDiscount: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"collateralFsmPriceFeedValue","type":"uint256"},{"internalType":"uint256","name":"collateralMedianPriceFeedValue","type":"uint256"},{"internalType":"uint256","name":"systemCoinPriceFeedValue","type":"uint256"},{"internalType":"uint256","name":"customDiscount","type":"uint256"}],"name":"getDiscountedCollateralPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            collateralFsmPriceFeedValue,
            collateralMedianPriceFeedValue,
            systemCoinPriceFeedValue,
            customDiscount,
        ])
    }

    liquidationEngine(): Promise<string>
    liquidationEngine(multicall: true): MulticallRequest<string>
    liquidationEngine(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"liquidationEngine","outputs":[{"internalType":"contract LiquidationEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    lowerCollateralMedianDeviation(): Promise<BigNumber>
    lowerCollateralMedianDeviation(multicall: true): MulticallRequest<BigNumber>
    lowerCollateralMedianDeviation(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"lowerCollateralMedianDeviation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    lowerSystemCoinMedianDeviation(): Promise<BigNumber>
    lowerSystemCoinMedianDeviation(multicall: true): MulticallRequest<BigNumber>
    lowerSystemCoinMedianDeviation(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"lowerSystemCoinMedianDeviation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    minSystemCoinMedianDeviation(): Promise<BigNumber>
    minSystemCoinMedianDeviation(multicall: true): MulticallRequest<BigNumber>
    minSystemCoinMedianDeviation(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"minSystemCoinMedianDeviation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    minimumBid(): Promise<BigNumber>
    minimumBid(multicall: true): MulticallRequest<BigNumber>
    minimumBid(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"minimumBid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    modifyParameters1(parameter: BytesLike, data: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"address","name":"data","type":"address"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [parameter, data])
    }

    modifyParameters2(
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"address","name":"data","type":"address"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [parameter, data])
    }

    oracleRelayer(): Promise<string>
    oracleRelayer(multicall: true): MulticallRequest<string>
    oracleRelayer(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"oracleRelayer","outputs":[{"internalType":"contract OracleRelayerLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    remainingAmountToSell(id: BigNumberish): Promise<BigNumber>
    remainingAmountToSell(
        id: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    remainingAmountToSell(
        id: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"remainingAmountToSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [id], multicall)
    }

    removeAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    safeEngine(): Promise<string>
    safeEngine(multicall: true): MulticallRequest<string>
    safeEngine(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"safeEngine","outputs":[{"internalType":"contract SAFEEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    settleAuction(id: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"settleAuction","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id])
    }

    startAuction(
        forgoneCollateralReceiver: string,
        auctionIncomeRecipient: string,
        amountToRaise: BigNumberish,
        amountToSell: BigNumberish,
        initialBid: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"forgoneCollateralReceiver","type":"address"},{"internalType":"address","name":"auctionIncomeRecipient","type":"address"},{"internalType":"uint256","name":"amountToRaise","type":"uint256"},{"internalType":"uint256","name":"amountToSell","type":"uint256"},{"internalType":"uint256","name":"initialBid","type":"uint256"}],"name":"startAuction","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            forgoneCollateralReceiver,
            auctionIncomeRecipient,
            amountToRaise,
            amountToSell,
            initialBid,
        ])
    }

    systemCoinOracle(): Promise<string>
    systemCoinOracle(multicall: true): MulticallRequest<string>
    systemCoinOracle(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"systemCoinOracle","outputs":[{"internalType":"contract OracleLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    terminateAuctionPrematurely(id: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"terminateAuctionPrematurely","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id])
    }

    totalAuctionLength(): Promise<number>
    totalAuctionLength(multicall: true): MulticallRequest<number>
    totalAuctionLength(
        multicall?: true
    ): Promise<number> | MulticallRequest<number> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"totalAuctionLength","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    upperCollateralMedianDeviation(): Promise<BigNumber>
    upperCollateralMedianDeviation(multicall: true): MulticallRequest<BigNumber>
    upperCollateralMedianDeviation(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"upperCollateralMedianDeviation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    upperSystemCoinMedianDeviation(): Promise<BigNumber>
    upperSystemCoinMedianDeviation(multicall: true): MulticallRequest<BigNumber>
    upperSystemCoinMedianDeviation(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"upperSystemCoinMedianDeviation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }
}
