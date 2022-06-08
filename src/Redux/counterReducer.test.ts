import {counterReducer, initialState} from "./counterReducer";
import {
    changeMaxValueAC,
    changeStartValueAC,
    incrementCounterAC,
    resetStartValueAC,
    setResetValueAC
} from "./counterActions";

test('increment counter value', ()=>{
    const endState = counterReducer(initialState, incrementCounterAC());

    expect(endState.startValue).toBe(1);
});

test('change start value', ()=>{
    const endState = counterReducer(initialState, changeStartValueAC(5));

   expect(endState.startValue).toBe(5);
});

test('change max value', ()=>{
    const endState = counterReducer(initialState, changeMaxValueAC(10));

    expect(endState.maxValue).toBe(10);
});

const initState = {
    startValue: 15,
    maxValue: 25,
    resetValue: 0
}

test('set reset value', ()=>{
    const endState = counterReducer(initState, setResetValueAC());

    expect(endState.resetValue).toBe(15);
});

const iniState = {
    startValue: 15,
    maxValue: 25,
    resetValue: 17
}

test('reset start value', ()=>{
    const endState = counterReducer(iniState, resetStartValueAC());

    expect(endState.startValue).toBe(17);
});