/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { MulticallRequest } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class AccountingEngine extends BaseContractAPI {
    addAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    auctionDebt(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"auctionDebt","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    auctionSurplus(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"auctionSurplus","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
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

    cancelAuctionedDebtWithSurplus(rad: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"cancelAuctionedDebtWithSurplus","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [rad])
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

    debtAuctionBidSize(): Promise<BigNumber>
    debtAuctionBidSize(multicall: true): MulticallRequest<BigNumber>
    debtAuctionBidSize(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"debtAuctionBidSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    debtAuctionHouse(): Promise<string>
    debtAuctionHouse(multicall: true): MulticallRequest<string>
    debtAuctionHouse(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"debtAuctionHouse","outputs":[{"internalType":"contract DebtAuctionHouseLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    debtPoppers(uinteger: BigNumberish): Promise<string>
    debtPoppers(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<string>
    debtPoppers(
        uinteger: BigNumberish,
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"debtPoppers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    debtQueue(uinteger: BigNumberish): Promise<BigNumber>
    debtQueue(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    debtQueue(
        uinteger: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"debtQueue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    disableContract(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"disableContract","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    disableCooldown(): Promise<BigNumber>
    disableCooldown(multicall: true): MulticallRequest<BigNumber>
    disableCooldown(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"disableCooldown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    disableTimestamp(): Promise<BigNumber>
    disableTimestamp(multicall: true): MulticallRequest<BigNumber>
    disableTimestamp(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"disableTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    initialDebtAuctionMintedTokens(): Promise<BigNumber>
    initialDebtAuctionMintedTokens(multicall: true): MulticallRequest<BigNumber>
    initialDebtAuctionMintedTokens(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"initialDebtAuctionMintedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    lastSurplusAuctionTime(): Promise<BigNumber>
    lastSurplusAuctionTime(multicall: true): MulticallRequest<BigNumber>
    lastSurplusAuctionTime(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"lastSurplusAuctionTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

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

    popDebtDelay(): Promise<BigNumber>
    popDebtDelay(multicall: true): MulticallRequest<BigNumber>
    popDebtDelay(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"popDebtDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    popDebtFromQueue(debtBlockTimestamp: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"debtBlockTimestamp","type":"uint256"}],"name":"popDebtFromQueue","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [debtBlockTimestamp])
    }

    postSettlementSurplusDrain(): Promise<string>
    postSettlementSurplusDrain(multicall: true): MulticallRequest<string>
    postSettlementSurplusDrain(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"postSettlementSurplusDrain","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    protocolTokenAuthority(): Promise<string>
    protocolTokenAuthority(multicall: true): MulticallRequest<string>
    protocolTokenAuthority(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"protocolTokenAuthority","outputs":[{"internalType":"contract ProtocolTokenAuthorityLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    pushDebtToQueue(debtBlock: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"debtBlock","type":"uint256"}],"name":"pushDebtToQueue","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [debtBlock])
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

    settleDebt(rad: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"settleDebt","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [rad])
    }

    surplusAuctionAmountToSell(): Promise<BigNumber>
    surplusAuctionAmountToSell(multicall: true): MulticallRequest<BigNumber>
    surplusAuctionAmountToSell(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"surplusAuctionAmountToSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    surplusAuctionDelay(): Promise<BigNumber>
    surplusAuctionDelay(multicall: true): MulticallRequest<BigNumber>
    surplusAuctionDelay(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"surplusAuctionDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    surplusAuctionHouse(): Promise<string>
    surplusAuctionHouse(multicall: true): MulticallRequest<string>
    surplusAuctionHouse(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"surplusAuctionHouse","outputs":[{"internalType":"contract SurplusAuctionHouseLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    surplusBuffer(): Promise<BigNumber>
    surplusBuffer(multicall: true): MulticallRequest<BigNumber>
    surplusBuffer(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"surplusBuffer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    totalOnAuctionDebt(): Promise<BigNumber>
    totalOnAuctionDebt(multicall: true): MulticallRequest<BigNumber>
    totalOnAuctionDebt(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"totalOnAuctionDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    totalQueuedDebt(): Promise<BigNumber>
    totalQueuedDebt(multicall: true): MulticallRequest<BigNumber>
    totalQueuedDebt(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"totalQueuedDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    transferPostSettlementSurplus(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"transferPostSettlementSurplus","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    unqueuedUnauctionedDebt(): Promise<BigNumber>
    unqueuedUnauctionedDebt(multicall: true): MulticallRequest<BigNumber>
    unqueuedUnauctionedDebt(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"unqueuedUnauctionedDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }
}
