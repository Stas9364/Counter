export enum ACTIONS_TYPE {
    INCREMENT_COUNTER_VALUE = 'INCREMENT-COUNTER-VALUE',
    CHANGE_START_VALUE = 'CHANGE-START-VALUE',
    CHANGE_MAX_VALUE = 'CHANGE-MAX-VALUE',
    SET_RESET_VALUE = 'SET-RESET-VALUE',
    RESET_START_VALUE = 'RESET-START-VALUE'
}

export type ActionType = IncrementCounterACType | ChangeStartValueAC | ChangeMaxValueAC | SetResetValueAC | ResetStartValueAC;
type IncrementCounterACType = ReturnType<typeof incrementCounterAC>
type ChangeStartValueAC = ReturnType<typeof changeStartValueAC>
type ChangeMaxValueAC = ReturnType<typeof changeMaxValueAC>
type SetResetValueAC = ReturnType<typeof setResetValueAC>
type ResetStartValueAC = ReturnType<typeof resetStartValueAC>


export const incrementCounterAC = () => ({type: ACTIONS_TYPE.INCREMENT_COUNTER_VALUE})as const;

export const changeStartValueAC = (startNumber: number)=> {
    return {
        type: ACTIONS_TYPE.CHANGE_START_VALUE,
        startNumber
    }as const
};

export const changeMaxValueAC = (maxValue: number)=> {
    return {
        type: ACTIONS_TYPE.CHANGE_MAX_VALUE,
        maxValue
    }as const
};

export const setResetValueAC = () => ({type: ACTIONS_TYPE.SET_RESET_VALUE})as const;

export const resetStartValueAC = () => ({type: ACTIONS_TYPE.RESET_START_VALUE})as const;
