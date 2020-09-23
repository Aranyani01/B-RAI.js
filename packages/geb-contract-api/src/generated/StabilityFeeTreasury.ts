/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { MulticallRequest } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class StabilityFeeTreasury extends BaseContractAPI {
    accountingEngine(): Promise<string>
    accountingEngine(multicall: true): MulticallRequest<string>
    accountingEngine(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"accountingEngine","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    accumulatorTag(): Promise<BigNumber>
    accumulatorTag(multicall: true): MulticallRequest<BigNumber>
    accumulatorTag(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"accumulatorTag","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

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

    coinJoin(): Promise<string>
    coinJoin(multicall: true): MulticallRequest<string>
    coinJoin(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"coinJoin","outputs":[{"internalType":"contract CoinJoinLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
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
     * Disable this contract (normally called by GlobalSettlement)
     */

    disableContract(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"disableContract","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    expensesAccumulator(): Promise<BigNumber>
    expensesAccumulator(multicall: true): MulticallRequest<BigNumber>
    expensesAccumulator(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"expensesAccumulator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    expensesMultiplier(): Promise<BigNumber>
    expensesMultiplier(multicall: true): MulticallRequest<BigNumber>
    expensesMultiplier(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"expensesMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    getAllowance(account: string): Promise<{}>
    getAllowance(account: string, multicall: true): MulticallRequest<{}>
    getAllowance(
        account: string,
        multicall?: true
    ): Promise<{}> | MulticallRequest<{}> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [account], multicall)
    }

    /**
     * Governance transfers SF to an address
     * @param account Address to transfer SF to
     * @param rad Amount of internal system coins to transfer (a number with 45 decimals)
     */

    giveFunds(account: string, rad: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"giveFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account, rad])
    }

    latestSurplusTransferTime(): Promise<BigNumber>
    latestSurplusTransferTime(multicall: true): MulticallRequest<BigNumber>
    latestSurplusTransferTime(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"latestSurplusTransferTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    minimumFundsRequired(): Promise<BigNumber>
    minimumFundsRequired(multicall: true): MulticallRequest<BigNumber>
    minimumFundsRequired(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"minimumFundsRequired","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    /**
     * Modify contract addresses
     * @param addr New address for the contract
     * @param parameter The name of the contract whose address will be changed
     */

    modifyParameters(parameter: BytesLike, addr: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"address","name":"addr","type":"address"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [parameter, addr])
    }

    /**
     * Pull stability fees from the treasury (if your allowance permits)
     * @param dstAccount Address to transfer funds to
     * @param token Address of the token to transfer (in this case it must be the address of the ERC20 system coin).             Used only to adhere to a standard for automated, on-chain treasuries
     * @param wad Amount of system coins (SF) to transfer (expressed as an 18 decimal number but the contract will transfer internal system coins that have 45 decimals)
     */

    pullFunds(
        dstAccount: string,
        token: string,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"dstAccount","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"pullFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [dstAccount, token, wad])
    }

    pulledPerBlock(address: string, uinteger: BigNumberish): Promise<BigNumber>
    pulledPerBlock(
        address: string,
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    pulledPerBlock(
        address: string,
        uinteger: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"pulledPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address, uinteger], multicall)
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

    /**
     * Modify an address' per block allowance in order to withdraw SF from the treasury
     * @param account The approved address
     * @param rad The per block approved amount of SF to withdraw (number with 45 decimals)
     */

    setPerBlockAllowance(
        account: string,
        rad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"setPerBlockAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account, rad])
    }

    /**
     * Modify an address' total allowance in order to withdraw SF from the treasury
     * @param account The approved address
     * @param rad The total approved amount of SF to withdraw (number with 45 decimals)
     */

    setTotalAllowance(account: string, rad: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"setTotalAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account, rad])
    }

    surplusTransferDelay(): Promise<BigNumber>
    surplusTransferDelay(multicall: true): MulticallRequest<BigNumber>
    surplusTransferDelay(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"surplusTransferDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    systemCoin(): Promise<string>
    systemCoin(multicall: true): MulticallRequest<string>
    systemCoin(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"systemCoin","outputs":[{"internalType":"contract SystemCoinLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    /**
     * Governance takes funds from an address
     * @param account Address to take system coins from
     * @param rad Amount of internal system coins to take from the account (a number with 45 decimals)
     */

    takeFunds(account: string, rad: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"takeFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account, rad])
    }

    /**
     * Transfer surplus stability fees to the AccountingEngine. This is here to make sure that the treasury doesn't accumulate too many fees that it doesn't even need in order to pay for allowances. It ensures that there are enough funds left in the treasury to account for projected expenses (latest expenses multiplied by an expense multiplier)
     */

    transferSurplusFunds(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"transferSurplusFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    treasuryCapacity(): Promise<BigNumber>
    treasuryCapacity(multicall: true): MulticallRequest<BigNumber>
    treasuryCapacity(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"treasuryCapacity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }
}
