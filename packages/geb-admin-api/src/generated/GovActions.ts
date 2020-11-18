/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'

export class GovActions extends BaseContractAPI {
    addAuthority(validator: string, account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"validator","type":"address"},{"internalType":"address","name":"account","type":"address"}],"name":"addAuthority","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [validator, account])
    }

    addAuthorization(targetContract: string, to: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [targetContract, to])
    }

    addReader(validator: string, reader: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"validator","type":"address"},{"internalType":"address","name":"reader","type":"address"}],"name":"addReader","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [validator, reader])
    }

    changeNextPriceDeviation(
        fsm: string,
        deviation: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"fsm","type":"address"},{"internalType":"uint256","name":"deviation","type":"uint256"}],"name":"changeNextPriceDeviation","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [fsm, deviation])
    }

    changePriceSource(fsm: string, priceSource: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"fsm","type":"address"},{"internalType":"address","name":"priceSource","type":"address"}],"name":"changePriceSource","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [fsm, priceSource])
    }

    disableContract(targetContract: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"}],"name":"disableContract","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [targetContract])
    }

    initializeCollateralType(
        targetContract: string,
        collateralType: BytesLike
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"}],"name":"initializeCollateralType","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [targetContract, collateralType])
    }

    modifyParameters1(
        targetContract: string,
        collateralType: BytesLike,
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            targetContract,
            collateralType,
            parameter,
            data,
        ])
    }

    modifyParameters2(
        targetContract: string,
        collateralType: BytesLike,
        parameter: BytesLike,
        data: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            targetContract,
            collateralType,
            parameter,
            data,
        ])
    }

    modifyParameters3(
        targetContract: string,
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"int256","name":"data","type":"int256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            targetContract,
            parameter,
            data,
        ])
    }

    modifyParameters4(
        targetContract: string,
        collateralType: BytesLike,
        data1: BigNumberish,
        data2: BigNumberish,
        data3: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"uint256","name":"data1","type":"uint256"},{"internalType":"uint256","name":"data2","type":"uint256"},{"internalType":"address","name":"data3","type":"address"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            targetContract,
            collateralType,
            data1,
            data2,
            data3,
        ])
    }

    modifyParameters5(
        targetContract: string,
        parameter: BytesLike,
        data1: BigNumberish,
        data2: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            targetContract,
            parameter,
            data1,
            data2,
        ])
    }

    modifyParameters6(
        targetContract: string,
        parameter: BytesLike,
        data: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"int256","name":"data","type":"int256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            targetContract,
            parameter,
            data,
        ])
    }

    modifyParameters7(
        targetContract: string,
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"int256","name":"data","type":"int256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            targetContract,
            parameter,
            data,
        ])
    }

    modifyTwoParameters1(
        targetContract1: string,
        targetContract2: string,
        parameter1: BytesLike,
        parameter2: BytesLike,
        data1: BigNumberish,
        data2: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract1","type":"address"},{"internalType":"address","name":"targetContract2","type":"address"},{"internalType":"bytes32","name":"parameter1","type":"bytes32"},{"internalType":"bytes32","name":"parameter2","type":"bytes32"},{"internalType":"uint256","name":"data1","type":"uint256"},{"internalType":"uint256","name":"data2","type":"uint256"}],"name":"modifyTwoParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            targetContract1,
            targetContract2,
            parameter1,
            parameter2,
            data1,
            data2,
        ])
    }

    modifyTwoParameters2(
        targetContract1: string,
        targetContract2: string,
        parameter1: BytesLike,
        parameter2: BytesLike,
        data1: BigNumberish,
        data2: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract1","type":"address"},{"internalType":"address","name":"targetContract2","type":"address"},{"internalType":"bytes32","name":"parameter1","type":"bytes32"},{"internalType":"bytes32","name":"parameter2","type":"bytes32"},{"internalType":"uint256","name":"data1","type":"uint256"},{"internalType":"uint256","name":"data2","type":"uint256"}],"name":"modifyTwoParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            targetContract1,
            targetContract2,
            parameter1,
            parameter2,
            data1,
            data2,
        ])
    }

    modifyTwoParameters3(
        targetContract1: string,
        targetContract2: string,
        collateralType1: BytesLike,
        collateralType2: BytesLike,
        parameter1: BytesLike,
        parameter2: BytesLike,
        data1: BigNumberish,
        data2: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract1","type":"address"},{"internalType":"address","name":"targetContract2","type":"address"},{"internalType":"bytes32","name":"collateralType1","type":"bytes32"},{"internalType":"bytes32","name":"collateralType2","type":"bytes32"},{"internalType":"bytes32","name":"parameter1","type":"bytes32"},{"internalType":"bytes32","name":"parameter2","type":"bytes32"},{"internalType":"uint256","name":"data1","type":"uint256"},{"internalType":"uint256","name":"data2","type":"uint256"}],"name":"modifyTwoParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            targetContract1,
            targetContract2,
            collateralType1,
            collateralType2,
            parameter1,
            parameter2,
            data1,
            data2,
        ])
    }

    multiSetAllowance(
        join: string,
        accounts: string[],
        allowances: BigNumberish[]
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"join","type":"address"},{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"allowances","type":"uint256[]"}],"name":"multiSetAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [join, accounts, allowances])
    }

    removeAuthority(validator: string, account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"validator","type":"address"},{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthority","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [validator, account])
    }

    removeAuthorization(
        targetContract: string,
        to: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [targetContract, to])
    }

    removeAuthorizationAndModify(
        targetContract: string,
        to: string,
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"removeAuthorizationAndModify","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            targetContract,
            to,
            parameter,
            data,
        ])
    }

    removeReader(validator: string, reader: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"validator","type":"address"},{"internalType":"address","name":"reader","type":"address"}],"name":"removeReader","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [validator, reader])
    }

    setAllowance(
        join: string,
        account: string,
        allowance: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"join","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"}],"name":"setAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [join, account, allowance])
    }

    setAuthority(pause: string, newAuthority: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"pause","type":"address"},{"internalType":"address","name":"newAuthority","type":"address"}],"name":"setAuthority","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [pause, newAuthority])
    }

    setAuthorityAndDelay(
        pause: string,
        newAuthority: string,
        newDelay: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"pause","type":"address"},{"internalType":"address","name":"newAuthority","type":"address"},{"internalType":"uint256","name":"newDelay","type":"uint256"}],"name":"setAuthorityAndDelay","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [pause, newAuthority, newDelay])
    }

    setDelay(pause: string, newDelay: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"pause","type":"address"},{"internalType":"uint256","name":"newDelay","type":"uint256"}],"name":"setDelay","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [pause, newDelay])
    }

    setDelayMultiplier(
        pause: string,
        delayMultiplier: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"pause","type":"address"},{"internalType":"uint256","name":"delayMultiplier","type":"uint256"}],"name":"setDelayMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [pause, delayMultiplier])
    }

    setDummyPIDValidator(
        rateSetter: string,
        oracleRelayer: string,
        dummyValidator: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"rateSetter","type":"address"},{"internalType":"address","name":"oracleRelayer","type":"address"},{"internalType":"address","name":"dummyValidator","type":"address"}],"name":"setDummyPIDValidator","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            rateSetter,
            oracleRelayer,
            dummyValidator,
        ])
    }

    setName(coin: string, name: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"coin","type":"address"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [coin, name])
    }

    setPerBlockAllowance(
        targetContract: string,
        account: string,
        rad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"setPerBlockAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [targetContract, account, rad])
    }

    setProtester(pause: string, protester: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"pause","type":"address"},{"internalType":"address","name":"protester","type":"address"}],"name":"setProtester","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [pause, protester])
    }

    setSymbol(coin: string, symbol: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"coin","type":"address"},{"internalType":"string","name":"symbol","type":"string"}],"name":"setSymbol","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [coin, symbol])
    }

    setTotalAllowance(
        targetContract: string,
        account: string,
        rad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"setTotalAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [targetContract, account, rad])
    }

    shutdownSystem(globalSettlement: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"globalSettlement","type":"address"}],"name":"shutdownSystem","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [globalSettlement])
    }

    start(fsm: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"fsm","type":"address"}],"name":"start","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [fsm])
    }

    stopFsm(
        fsmGovInterface: string,
        collateralType: BytesLike
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"fsmGovInterface","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"}],"name":"stopFsm","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            fsmGovInterface,
            collateralType,
        ])
    }

    taxManyAndModifyParameters(
        targetContract: string,
        start: BigNumberish,
        end: BigNumberish,
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"taxManyAndModifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            targetContract,
            start,
            end,
            parameter,
            data,
        ])
    }

    taxSingleAndModifyParameters(
        targetContract: string,
        collateralType: BytesLike,
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"taxSingleAndModifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            targetContract,
            collateralType,
            parameter,
            data,
        ])
    }

    updateRateAndModifyParameters(
        targetContract: string,
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"updateRateAndModifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            targetContract,
            parameter,
            data,
        ])
    }

    updateRedemptionRate(
        targetContract: string,
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"updateRedemptionRate","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            targetContract,
            parameter,
            data,
        ])
    }
}
