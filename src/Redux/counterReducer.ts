import {ACTIONS_TYPE, ActionType} from "./counterActions";

type InitialStateType = typeof initialState;

export const initialState = {
    startValue: 0,
    maxValue: 5,
    resetValue: 0
};

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.INCREMENT_COUNTER_VALUE:
            return {
                ...state,
                startValue: state.startValue + 1
            };
        case ACTIONS_TYPE.CHANGE_START_VALUE:
            return {
                ...state,
                startValue: action.startNumber
            };
        case ACTIONS_TYPE.CHANGE_MAX_VALUE:
            return {
                ...state,
                maxValue: action.maxValue
            };
        case ACTIONS_TYPE.SET_RESET_VALUE:
            return {
                ...state,
                resetValue: state.startValue
            };
        case ACTIONS_TYPE.RESET_START_VALUE:
            return {
                ...state,
                startValue: state.resetValue
            }
        default:
            return state;
    }
};

