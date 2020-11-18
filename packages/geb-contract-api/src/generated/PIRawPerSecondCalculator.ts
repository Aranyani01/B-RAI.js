/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { MulticallRequest } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class PiRawPerSecondCalculator extends BaseContractAPI {
    adat(): Promise<BigNumber>
    adat(multicall: true): MulticallRequest<BigNumber>
    adat(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"adat","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    addAuthority(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthority","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    addReader(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addReader","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    adi(): Promise<BigNumber>
    adi(multicall: true): MulticallRequest<BigNumber>
    adi(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"adi","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    ag(): Promise<BigNumber>
    ag(multicall: true): MulticallRequest<BigNumber>
    ag(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"ag","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    allReaderToggle(): Promise<BigNumber>
    allReaderToggle(multicall: true): MulticallRequest<BigNumber>
    allReaderToggle(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"allReaderToggle","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    authorities(address: string): Promise<BigNumber>
    authorities(address: string, multicall: true): MulticallRequest<BigNumber>
    authorities(
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"authorities","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address], multicall)
    }

    breaksNoiseBarrier(
        piSum: BigNumberish,
        redemptionPrice: BigNumberish
    ): Promise<boolean>
    breaksNoiseBarrier(
        piSum: BigNumberish,
        redemptionPrice: BigNumberish,
        multicall: true
    ): MulticallRequest<boolean>
    breaksNoiseBarrier(
        piSum: BigNumberish,
        redemptionPrice: BigNumberish,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"piSum","type":"uint256"},{"internalType":"uint256","name":"redemptionPrice","type":"uint256"}],"name":"breaksNoiseBarrier","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [piSum, redemptionPrice], multicall)
    }

    computeRate(
        marketPrice: BigNumberish,
        redemptionPrice: BigNumberish,
        accumulatedLeak: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"marketPrice","type":"uint256"},{"internalType":"uint256","name":"redemptionPrice","type":"uint256"},{"internalType":"uint256","name":"accumulatedLeak","type":"uint256"}],"name":"computeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            marketPrice,
            redemptionPrice,
            accumulatedLeak,
        ])
    }

    dgt(): Promise<BigNumber>
    dgt(multicall: true): MulticallRequest<BigNumber>
    dgt(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"dgt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    dos(
        i: BigNumberish
    ): Promise<{
        0: BigNumber
        1: BigNumber
        2: BigNumber
    }>
    dos(
        i: BigNumberish,
        multicall: true
    ): MulticallRequest<{
        0: BigNumber
        1: BigNumber
        2: BigNumber
    }>
    dos(
        i: BigNumberish,
        multicall?: true
    ):
        | Promise<{
              0: BigNumber
              1: BigNumber
              2: BigNumber
          }>
        | MulticallRequest<{
              0: BigNumber
              1: BigNumber
              2: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"dos","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [i], multicall)
    }

    drr(): Promise<BigNumber>
    drr(multicall: true): MulticallRequest<BigNumber>
    drr(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"drr","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    folb(): Promise<BigNumber>
    folb(multicall: true): MulticallRequest<BigNumber>
    folb(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"folb","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    foub(): Promise<BigNumber>
    foub(multicall: true): MulticallRequest<BigNumber>
    foub(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"foub","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    getBoundedRedemptionRate(
        piOutput: BigNumberish
    ): Promise<{
        0: BigNumber
        1: BigNumber
    }>
    getBoundedRedemptionRate(
        piOutput: BigNumberish,
        multicall: true
    ): MulticallRequest<{
        0: BigNumber
        1: BigNumber
    }>
    getBoundedRedemptionRate(
        piOutput: BigNumberish,
        multicall?: true
    ):
        | Promise<{
              0: BigNumber
              1: BigNumber
          }>
        | MulticallRequest<{
              0: BigNumber
              1: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"int256","name":"piOutput","type":"int256"}],"name":"getBoundedRedemptionRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [piOutput], multicall)
    }

    getGainAdjustedPIOutput(
        proportionalTerm: BigNumberish,
        integralTerm: BigNumberish
    ): Promise<BigNumber>
    getGainAdjustedPIOutput(
        proportionalTerm: BigNumberish,
        integralTerm: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    getGainAdjustedPIOutput(
        proportionalTerm: BigNumberish,
        integralTerm: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"int256","name":"proportionalTerm","type":"int256"},{"internalType":"int256","name":"integralTerm","type":"int256"}],"name":"getGainAdjustedPIOutput","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(
            abi,
            [proportionalTerm, integralTerm],
            multicall
        )
    }

    getGainAdjustedTerms(
        proportionalTerm: BigNumberish,
        integralTerm: BigNumberish
    ): Promise<{
        0: BigNumber
        1: BigNumber
    }>
    getGainAdjustedTerms(
        proportionalTerm: BigNumberish,
        integralTerm: BigNumberish,
        multicall: true
    ): MulticallRequest<{
        0: BigNumber
        1: BigNumber
    }>
    getGainAdjustedTerms(
        proportionalTerm: BigNumberish,
        integralTerm: BigNumberish,
        multicall?: true
    ):
        | Promise<{
              0: BigNumber
              1: BigNumber
          }>
        | MulticallRequest<{
              0: BigNumber
              1: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"int256","name":"proportionalTerm","type":"int256"},{"internalType":"int256","name":"integralTerm","type":"int256"}],"name":"getGainAdjustedTerms","outputs":[{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(
            abi,
            [proportionalTerm, integralTerm],
            multicall
        )
    }

    getLastIntegralTerm(): Promise<BigNumber>
    getLastIntegralTerm(multicall: true): MulticallRequest<BigNumber>
    getLastIntegralTerm(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"getLastIntegralTerm","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    getLastProportionalTerm(): Promise<BigNumber>
    getLastProportionalTerm(multicall: true): MulticallRequest<BigNumber>
    getLastProportionalTerm(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"getLastProportionalTerm","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    getNextPriceDeviationCumulative(
        proportionalTerm: BigNumberish,
        accumulatedLeak: BigNumberish
    ): Promise<{
        0: BigNumber
        1: BigNumber
    }>
    getNextPriceDeviationCumulative(
        proportionalTerm: BigNumberish,
        accumulatedLeak: BigNumberish,
        multicall: true
    ): MulticallRequest<{
        0: BigNumber
        1: BigNumber
    }>
    getNextPriceDeviationCumulative(
        proportionalTerm: BigNumberish,
        accumulatedLeak: BigNumberish,
        multicall?: true
    ):
        | Promise<{
              0: BigNumber
              1: BigNumber
          }>
        | MulticallRequest<{
              0: BigNumber
              1: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"int256","name":"proportionalTerm","type":"int256"},{"internalType":"uint256","name":"accumulatedLeak","type":"uint256"}],"name":"getNextPriceDeviationCumulative","outputs":[{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(
            abi,
            [proportionalTerm, accumulatedLeak],
            multicall
        )
    }

    getNextRedemptionRate(
        marketPrice: BigNumberish,
        redemptionPrice: BigNumberish,
        accumulatedLeak: BigNumberish
    ): Promise<{
        0: BigNumber
        1: BigNumber
        2: BigNumber
        3: BigNumber
    }>
    getNextRedemptionRate(
        marketPrice: BigNumberish,
        redemptionPrice: BigNumberish,
        accumulatedLeak: BigNumberish,
        multicall: true
    ): MulticallRequest<{
        0: BigNumber
        1: BigNumber
        2: BigNumber
        3: BigNumber
    }>
    getNextRedemptionRate(
        marketPrice: BigNumberish,
        redemptionPrice: BigNumberish,
        accumulatedLeak: BigNumberish,
        multicall?: true
    ):
        | Promise<{
              0: BigNumber
              1: BigNumber
              2: BigNumber
              3: BigNumber
          }>
        | MulticallRequest<{
              0: BigNumber
              1: BigNumber
              2: BigNumber
              3: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"marketPrice","type":"uint256"},{"internalType":"uint256","name":"redemptionPrice","type":"uint256"},{"internalType":"uint256","name":"accumulatedLeak","type":"uint256"}],"name":"getNextRedemptionRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(
            abi,
            [marketPrice, redemptionPrice, accumulatedLeak],
            multicall
        )
    }

    hcd(i: BigNumberish): Promise<BigNumber>
    hcd(i: BigNumberish, multicall: true): MulticallRequest<BigNumber>
    hcd(
        i: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"hcd","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [i], multicall)
    }

    ips(): Promise<BigNumber>
    ips(multicall: true): MulticallRequest<BigNumber>
    ips(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"ips","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    lprad(): Promise<BigNumber>
    lprad(multicall: true): MulticallRequest<BigNumber>
    lprad(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"lprad","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    lut(): Promise<BigNumber>
    lut(multicall: true): MulticallRequest<BigNumber>
    lut(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"lut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    modifyParameters1(
        parameter: BytesLike,
        val: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"int256","name":"val","type":"int256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [parameter, val])
    }

    modifyParameters2(parameter: BytesLike, addr: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"int256","name":"val","type":"int256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [parameter, addr])
    }

    modifyParameters3(
        parameter: BytesLike,
        val: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"int256","name":"val","type":"int256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [parameter, val])
    }

    mrt(): Promise<BigNumber>
    mrt(multicall: true): MulticallRequest<BigNumber>
    mrt(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"mrt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    nb(): Promise<BigNumber>
    nb(multicall: true): MulticallRequest<BigNumber>
    nb(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"nb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    oll(): Promise<BigNumber>
    oll(multicall: true): MulticallRequest<BigNumber>
    oll(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"oll","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    pdc(): Promise<BigNumber>
    pdc(multicall: true): MulticallRequest<BigNumber>
    pdc(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"pdc","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    pscl(): Promise<BigNumber>
    pscl(multicall: true): MulticallRequest<BigNumber>
    pscl(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"pscl","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    readers(address: string): Promise<BigNumber>
    readers(address: string, multicall: true): MulticallRequest<BigNumber>
    readers(
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"readers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address], multicall)
    }

    removeAuthority(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthority","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    removeReader(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeReader","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    rt(
        marketPrice: BigNumberish,
        redemptionPrice: BigNumberish,
        accumulatedLeak: BigNumberish
    ): Promise<BigNumber>
    rt(
        marketPrice: BigNumberish,
        redemptionPrice: BigNumberish,
        accumulatedLeak: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    rt(
        marketPrice: BigNumberish,
        redemptionPrice: BigNumberish,
        accumulatedLeak: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"marketPrice","type":"uint256"},{"internalType":"uint256","name":"redemptionPrice","type":"uint256"},{"internalType":"uint256","name":"accumulatedLeak","type":"uint256"}],"name":"rt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(
            abi,
            [marketPrice, redemptionPrice, accumulatedLeak],
            multicall
        )
    }

    seedProposer(): Promise<string>
    seedProposer(multicall: true): MulticallRequest<string>
    seedProposer(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"seedProposer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    sg(): Promise<BigNumber>
    sg(multicall: true): MulticallRequest<BigNumber>
    sg(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"sg","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    tlv(): Promise<BigNumber>
    tlv(multicall: true): MulticallRequest<BigNumber>
    tlv(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"tlv","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    uprad(): Promise<BigNumber>
    uprad(multicall: true): MulticallRequest<BigNumber>
    uprad(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"uprad","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }
}
