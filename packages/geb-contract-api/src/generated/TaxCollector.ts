/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { MulticallRequest } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class TaxCollector extends BaseContractAPI {
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

    collateralList(uinteger: BigNumberish): Promise<string>
    collateralList(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<string>
    collateralList(
        uinteger: BigNumberish,
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"collateralList","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    /**
     * Get the collateralList length
     */
    collateralListLength(): Promise<BigNumber>
    collateralListLength(multicall: true): MulticallRequest<BigNumber>
    collateralListLength(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"collateralListLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    collateralTypes(
        bytes: BytesLike
    ): Promise<{
        stabilityFee: BigNumber
        updateTime: BigNumber
    }>
    collateralTypes(
        bytes: BytesLike,
        multicall: true
    ): MulticallRequest<{
        stabilityFee: BigNumber
        updateTime: BigNumber
    }>
    collateralTypes(
        bytes: BytesLike,
        multicall?: true
    ):
        | Promise<{
              stabilityFee: BigNumber
              updateTime: BigNumber
          }>
        | MulticallRequest<{
              stabilityFee: BigNumber
              updateTime: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralTypes","outputs":[{"internalType":"uint256","name":"stabilityFee","type":"uint256"},{"internalType":"uint256","name":"updateTime","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [bytes], multicall)
    }

    /**
     * Check if multiple collateral types are up to date with taxation
     */
    collectedManyTax(start: BigNumberish, end: BigNumberish): Promise<boolean>
    collectedManyTax(
        start: BigNumberish,
        end: BigNumberish,
        multicall: true
    ): MulticallRequest<boolean>
    collectedManyTax(
        start: BigNumberish,
        end: BigNumberish,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"collectedManyTax","outputs":[{"internalType":"bool","name":"ok","type":"bool"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [start, end], multicall)
    }

    globalStabilityFee(): Promise<BigNumber>
    globalStabilityFee(multicall: true): MulticallRequest<BigNumber>
    globalStabilityFee(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"globalStabilityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    /**
     * Initialize a brand new collateral type
     * @param collateralType Collateral type name (e.g ETH-A, TBTC-B)
     */

    initializeCollateralType(collateralType: BytesLike): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"}],"name":"initializeCollateralType","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [collateralType])
    }

    /**
     * Check if a tax receiver is at a certain position in the list
     */
    isSecondaryReceiver(_receiver: BigNumberish): Promise<boolean>
    isSecondaryReceiver(
        _receiver: BigNumberish,
        multicall: true
    ): MulticallRequest<boolean>
    isSecondaryReceiver(
        _receiver: BigNumberish,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"_receiver","type":"uint256"}],"name":"isSecondaryReceiver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [_receiver], multicall)
    }

    latestSecondaryReceiver(): Promise<BigNumber>
    latestSecondaryReceiver(multicall: true): MulticallRequest<BigNumber>
    latestSecondaryReceiver(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"latestSecondaryReceiver","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    maxSecondaryReceivers(): Promise<BigNumber>
    maxSecondaryReceivers(multicall: true): MulticallRequest<BigNumber>
    maxSecondaryReceivers(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"maxSecondaryReceivers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    /**
     * Create or modify a secondary tax receiver's data
     * @param collateralType Collateral type that will give SF to the tax receiver
     * @param position Receiver position in the list. Used to determine whether a new tax receiver is created or an existing one is edited
     * @param receiverAccount Receiver address
     * @param taxPercentage Percentage of SF offered to the tax receiver
     */

    modifyParameters(
        collateralType: BytesLike,
        position: BigNumberish,
        taxPercentage: BigNumberish,
        receiverAccount: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"uint256","name":"position","type":"uint256"},{"internalType":"uint256","name":"taxPercentage","type":"uint256"},{"internalType":"address","name":"receiverAccount","type":"address"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            collateralType,
            position,
            taxPercentage,
            receiverAccount,
        ])
    }

    primaryTaxReceiver(): Promise<string>
    primaryTaxReceiver(multicall: true): MulticallRequest<string>
    primaryTaxReceiver(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"primaryTaxReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
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

    safeEngine(): Promise<string>
    safeEngine(multicall: true): MulticallRequest<string>
    safeEngine(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"safeEngine","outputs":[{"internalType":"contract SAFEEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    secondaryReceiverAccounts(uinteger: BigNumberish): Promise<string>
    secondaryReceiverAccounts(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<string>
    secondaryReceiverAccounts(
        uinteger: BigNumberish,
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"secondaryReceiverAccounts","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    secondaryReceiverAllotedTax(bytes: BytesLike): Promise<BigNumber>
    secondaryReceiverAllotedTax(
        bytes: BytesLike,
        multicall: true
    ): MulticallRequest<BigNumber>
    secondaryReceiverAllotedTax(
        bytes: BytesLike,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"secondaryReceiverAllotedTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [bytes], multicall)
    }

    secondaryReceiverNonce(): Promise<BigNumber>
    secondaryReceiverNonce(multicall: true): MulticallRequest<BigNumber>
    secondaryReceiverNonce(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"secondaryReceiverNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    secondaryReceiverRevenueSources(address: string): Promise<BigNumber>
    secondaryReceiverRevenueSources(
        address: string,
        multicall: true
    ): MulticallRequest<BigNumber>
    secondaryReceiverRevenueSources(
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"secondaryReceiverRevenueSources","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address], multicall)
    }

    /**
     * Get the secondary tax receiver list length
     */
    secondaryReceiversAmount(): Promise<BigNumber>
    secondaryReceiversAmount(multicall: true): MulticallRequest<BigNumber>
    secondaryReceiversAmount(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"secondaryReceiversAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    secondaryTaxReceivers(
        bytes: BytesLike,
        uinteger: BigNumberish
    ): Promise<{
        canTakeBackTax: BigNumber
        taxPercentage: BigNumber
    }>
    secondaryTaxReceivers(
        bytes: BytesLike,
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<{
        canTakeBackTax: BigNumber
        taxPercentage: BigNumber
    }>
    secondaryTaxReceivers(
        bytes: BytesLike,
        uinteger: BigNumberish,
        multicall?: true
    ):
        | Promise<{
              canTakeBackTax: BigNumber
              taxPercentage: BigNumber
          }>
        | MulticallRequest<{
              canTakeBackTax: BigNumber
              taxPercentage: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"secondaryTaxReceivers","outputs":[{"internalType":"uint256","name":"canTakeBackTax","type":"uint256"},{"internalType":"uint256","name":"taxPercentage","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [bytes, uinteger], multicall)
    }

    /**
     * Collect tax from multiple collateral types at once
     * @param end Index in collateralList at which we stop looping and calculating the tax outcome
     * @param start Index in collateralList from which to start looping and calculating the tax outcome
     */

    taxMany(start: BigNumberish, end: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"taxMany","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [start, end])
    }

    /**
     * Check how much SF will be charged (to collateral types between indexes 'start' and 'end'        in the collateralList) during the next taxation
     * @param end Index in collateralList at which we stop looping and calculating the tax outcome
     * @param start Index in collateralList from which to start looping and calculating the tax outcome
     */
    taxManyOutcome(
        start: BigNumberish,
        end: BigNumberish
    ): Promise<{
        ok: boolean
        rad: BigNumber
    }>
    taxManyOutcome(
        start: BigNumberish,
        end: BigNumberish,
        multicall: true
    ): MulticallRequest<{
        ok: boolean
        rad: BigNumber
    }>
    taxManyOutcome(
        start: BigNumberish,
        end: BigNumberish,
        multicall?: true
    ):
        | Promise<{
              ok: boolean
              rad: BigNumber
          }>
        | MulticallRequest<{
              ok: boolean
              rad: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"taxManyOutcome","outputs":[{"internalType":"bool","name":"ok","type":"bool"},{"internalType":"int256","name":"rad","type":"int256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [start, end], multicall)
    }

    /**
     * Collect tax from a single collateral type
     * @param collateralType Collateral type to tax
     */

    taxSingle(collateralType: BytesLike): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"}],"name":"taxSingle","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [collateralType])
    }

    /**
     * Get how much SF will be distributed after taxing a specific collateral type
     * @param collateralType Collateral type to compute the taxation outcome for
     */
    taxSingleOutcome(collateralType: BytesLike): Promise<{}>
    taxSingleOutcome(
        collateralType: BytesLike,
        multicall: true
    ): MulticallRequest<{}>
    taxSingleOutcome(
        collateralType: BytesLike,
        multicall?: true
    ): Promise<{}> | MulticallRequest<{}> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"}],"name":"taxSingleOutcome","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [collateralType], multicall)
    }

    usedSecondaryReceiver(address: string): Promise<BigNumber>
    usedSecondaryReceiver(
        address: string,
        multicall: true
    ): MulticallRequest<BigNumber>
    usedSecondaryReceiver(
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"usedSecondaryReceiver","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address], multicall)
    }
}
