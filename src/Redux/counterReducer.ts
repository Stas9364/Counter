import {ActionType} from "./counterActions";

type InitialStateType = typeof initialState;

const initialState = {
    startValue: 0,
    maxValue: 5,
    resetValue: 0
};

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INCREMENT-COUNTER-VALUE':
            return {
                ...state,
                startValue: state.startValue + 1
            };
        case 'CHANGE-START-VALUE':
            return {
                ...state,
                startValue: action.startNumber
            };
        case 'CHANGE-MAX-VALUE':
            return {
                ...state,
                maxValue: action.maxValue
            };
        case 'SET-RESET-VALUE':
            return {
                ...state,
                resetValue: state.startValue
            };
        case 'RESET-START-VALUE':
            return {
                ...state,
                startValue: state.resetValue
            }
        default:
            return state;
    }
};

