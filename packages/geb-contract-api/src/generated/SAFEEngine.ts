/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { MulticallRequest } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class SafeEngine extends BaseContractAPI {
    /**
     * Add auth to an account
     * @param account Account to add auth to
     */

    addAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    /**
     * Allow an address to modify your SAFE
     * @param account Account to give SAFE permissions to
     */

    approveSAFEModification(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"approveSAFEModification","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
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

    /**
     * Checks whether msg.sender has the right to modify a SAFE*
     */
    canModifySAFE(safe: string, account: string): Promise<boolean>
    canModifySAFE(
        safe: string,
        account: string,
        multicall: true
    ): MulticallRequest<boolean>
    canModifySAFE(
        safe: string,
        account: string,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"safe","type":"address"},{"internalType":"address","name":"account","type":"address"}],"name":"canModifySAFE","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [safe, account], multicall)
    }

    coinBalance(address: string): Promise<BigNumber>
    coinBalance(address: string, multicall: true): MulticallRequest<BigNumber>
    coinBalance(
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"coinBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address], multicall)
    }

    collateralTypes(
        bytes: BytesLike
    ): Promise<{
        debtAmount: BigNumber
        accumulatedRate: BigNumber
        safetyPrice: BigNumber
        debtCeiling: BigNumber
        debtFloor: BigNumber
        liquidationPrice: BigNumber
    }>
    collateralTypes(
        bytes: BytesLike,
        multicall: true
    ): MulticallRequest<{
        debtAmount: BigNumber
        accumulatedRate: BigNumber
        safetyPrice: BigNumber
        debtCeiling: BigNumber
        debtFloor: BigNumber
        liquidationPrice: BigNumber
    }>
    collateralTypes(
        bytes: BytesLike,
        multicall?: true
    ):
        | Promise<{
              debtAmount: BigNumber
              accumulatedRate: BigNumber
              safetyPrice: BigNumber
              debtCeiling: BigNumber
              debtFloor: BigNumber
              liquidationPrice: BigNumber
          }>
        | MulticallRequest<{
              debtAmount: BigNumber
              accumulatedRate: BigNumber
              safetyPrice: BigNumber
              debtCeiling: BigNumber
              debtFloor: BigNumber
              liquidationPrice: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralTypes","outputs":[{"internalType":"uint256","name":"debtAmount","type":"uint256"},{"internalType":"uint256","name":"accumulatedRate","type":"uint256"},{"internalType":"uint256","name":"safetyPrice","type":"uint256"},{"internalType":"uint256","name":"debtCeiling","type":"uint256"},{"internalType":"uint256","name":"debtFloor","type":"uint256"},{"internalType":"uint256","name":"liquidationPrice","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [bytes], multicall)
    }

    /**
     * Normally used by the LiquidationEngine in order to confiscate collateral and debt from a SAFE and give them to someone else
     * @param collateralCounterparty Who we take/give collateral to
     * @param collateralType Collateral type the SAFE has locked inside
     * @param debtCounterparty Who we take/give debt to
     * @param deltaCollateral Amount of collateral taken/added into the SAFE (wad)
     * @param deltaDebt Amount of collateral taken/added into the SAFE (wad)
     * @param safe Target SAFE
     */

    confiscateSAFECollateralAndDebt(
        collateralType: BytesLike,
        safe: string,
        collateralCounterparty: string,
        debtCounterparty: string,
        deltaCollateral: BigNumberish,
        deltaDebt: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"safe","type":"address"},{"internalType":"address","name":"collateralCounterparty","type":"address"},{"internalType":"address","name":"debtCounterparty","type":"address"},{"internalType":"int256","name":"deltaCollateral","type":"int256"},{"internalType":"int256","name":"deltaDebt","type":"int256"}],"name":"confiscateSAFECollateralAndDebt","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            collateralType,
            safe,
            collateralCounterparty,
            debtCounterparty,
            deltaCollateral,
            deltaDebt,
        ])
    }

    contractEnabled(): Promise<BigNumber>
    contractEnabled(multicall: true): MulticallRequest<BigNumber>
    contractEnabled(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"contractEnabled","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    /**
     * Usually called by CoinSavingsAccount in order to create unbacked debt
     * @param coinDestination Usually CoinSavingsAccount who passes the new coins to depositors
     * @param debtDestination Usually AccountingEngine that can settle dent with surplus
     * @param rad Amount of debt to create
     */

    createUnbackedDebt(
        debtDestination: string,
        coinDestination: string,
        rad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"debtDestination","type":"address"},{"internalType":"address","name":"coinDestination","type":"address"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"createUnbackedDebt","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            debtDestination,
            coinDestination,
            rad,
        ])
    }

    debtBalance(address: string): Promise<BigNumber>
    debtBalance(address: string, multicall: true): MulticallRequest<BigNumber>
    debtBalance(
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"debtBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address], multicall)
    }

    /**
     * Deny an address the rights to modify your SAFE
     * @param account Account to give SAFE permissions to
     */

    denySAFEModification(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"denySAFEModification","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    /**
     * Disable this contract (normally called by GlobalSettlement)
     */

    disableContract(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"disableContract","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    globalDebt(): Promise<BigNumber>
    globalDebt(multicall: true): MulticallRequest<BigNumber>
    globalDebt(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"globalDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    globalDebtCeiling(): Promise<BigNumber>
    globalDebtCeiling(multicall: true): MulticallRequest<BigNumber>
    globalDebtCeiling(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"globalDebtCeiling","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    globalUnbackedDebt(): Promise<BigNumber>
    globalUnbackedDebt(multicall: true): MulticallRequest<BigNumber>
    globalUnbackedDebt(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"globalUnbackedDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    /**
     * Creates a brand new collateral type
     * @param collateralType Collateral type name (e.g ETH-A, TBTC-B)
     */

    initializeCollateralType(collateralType: BytesLike): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"}],"name":"initializeCollateralType","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [collateralType])
    }

    /**
     * Join/exit collateral into and and out of the system
     * @param account Account that gets credited/debited
     * @param collateralType Collateral type we join/exit
     * @param wad Amount of collateral
     */

    modifyCollateralBalance(
        collateralType: BytesLike,
        account: string,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"account","type":"address"},{"internalType":"int256","name":"wad","type":"int256"}],"name":"modifyCollateralBalance","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [collateralType, account, wad])
    }

    /**
     * Modify collateral specific params
     * @param collateralType Collateral type we modify params for
     * @param data New value for the parameter
     * @param parameter The name of the parameter modified
     */

    modifyParameters(
        collateralType: BytesLike,
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            collateralType,
            parameter,
            data,
        ])
    }

    /**
     * Add/remove collateral or put back/generate more debt in a SAFE
     * @param collateralSource Account we take collateral from/put collateral into
     * @param collateralType Type of collateral to withdraw/deposit in and from the SAFE
     * @param debtDestination Account from which we credit/debit coins and debt
     * @param deltaCollateral Amount of collateral added/extract from the SAFE (wad)
     * @param deltaDebt Amount of debt to generate/repay (wad)
     * @param safe Target SAFE
     */

    modifySAFECollateralization(
        collateralType: BytesLike,
        safe: string,
        collateralSource: string,
        debtDestination: string,
        deltaCollateral: BigNumberish,
        deltaDebt: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"safe","type":"address"},{"internalType":"address","name":"collateralSource","type":"address"},{"internalType":"address","name":"debtDestination","type":"address"},{"internalType":"int256","name":"deltaCollateral","type":"int256"},{"internalType":"int256","name":"deltaDebt","type":"int256"}],"name":"modifySAFECollateralization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            collateralType,
            safe,
            collateralSource,
            debtDestination,
            deltaCollateral,
            deltaDebt,
        ])
    }

    /**
     * Remove auth from an account
     * @param account Account to remove auth from
     */

    removeAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    safeRights(address1: string, address2: string): Promise<BigNumber>
    safeRights(
        address1: string,
        address2: string,
        multicall: true
    ): MulticallRequest<BigNumber>
    safeRights(
        address1: string,
        address2: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"safeRights","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address1, address2], multicall)
    }

    safes(
        bytes: BytesLike,
        address: string
    ): Promise<{
        lockedCollateral: BigNumber
        generatedDebt: BigNumber
    }>
    safes(
        bytes: BytesLike,
        address: string,
        multicall: true
    ): MulticallRequest<{
        lockedCollateral: BigNumber
        generatedDebt: BigNumber
    }>
    safes(
        bytes: BytesLike,
        address: string,
        multicall?: true
    ):
        | Promise<{
              lockedCollateral: BigNumber
              generatedDebt: BigNumber
          }>
        | MulticallRequest<{
              lockedCollateral: BigNumber
              generatedDebt: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"safes","outputs":[{"internalType":"uint256","name":"lockedCollateral","type":"uint256"},{"internalType":"uint256","name":"generatedDebt","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [bytes, address], multicall)
    }

    /**
     * Nullify an amount of coins with an equal amount of debt
     * @param rad Amount of debt & coins to destroy
     */

    settleDebt(rad: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"settleDebt","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [rad])
    }

    tokenCollateral(bytes: BytesLike, address: string): Promise<BigNumber>
    tokenCollateral(
        bytes: BytesLike,
        address: string,
        multicall: true
    ): MulticallRequest<BigNumber>
    tokenCollateral(
        bytes: BytesLike,
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"tokenCollateral","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [bytes, address], multicall)
    }

    /**
     * Transfer collateral between accounts
     * @param collateralType Collateral type transferred
     * @param dst Collateral destination
     * @param src Collateral source
     * @param wad Amount of collateral transferred
     */

    transferCollateral(
        collateralType: BytesLike,
        src: string,
        dst: string,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [collateralType, src, dst, wad])
    }

    /**
     * Transfer internal coins (does not affect external balances from Coin.sol)
     * @param dst Coins destination
     * @param rad Amount of coins transferred
     * @param src Coins source
     */

    transferInternalCoins(
        src: string,
        dst: string,
        rad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"transferInternalCoins","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [src, dst, rad])
    }

    /**
     * Transfer collateral and/or debt between SAFEs
     * @param collateralType Collateral type transferred between SAFEs
     * @param deltaCollateral Amount of collateral to take/add into src and give/take from dst (wad)
     * @param deltaDebt Amount of debt to take/add into src and give/take from dst (wad)
     * @param dst Destination SAFE
     * @param src Source SAFE
     */

    transferSAFECollateralAndDebt(
        collateralType: BytesLike,
        src: string,
        dst: string,
        deltaCollateral: BigNumberish,
        deltaDebt: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"int256","name":"deltaCollateral","type":"int256"},{"internalType":"int256","name":"deltaDebt","type":"int256"}],"name":"transferSAFECollateralAndDebt","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            collateralType,
            src,
            dst,
            deltaCollateral,
            deltaDebt,
        ])
    }

    /**
     * Usually called by TaxCollector in order to accrue interest on a specific collateral type
     * @param collateralType Collateral type we accrue interest for
     * @param rateMultiplier Multiplier applied to the debtAmount in order to calculate the surplus [ray]
     * @param surplusDst Destination for amount of surplus created by applying the interest rate to debt created by SAFEs with 'collateralType'
     */

    updateAccumulatedRate(
        collateralType: BytesLike,
        surplusDst: string,
        rateMultiplier: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"surplusDst","type":"address"},{"internalType":"int256","name":"rateMultiplier","type":"int256"}],"name":"updateAccumulatedRate","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            collateralType,
            surplusDst,
            rateMultiplier,
        ])
    }
}
