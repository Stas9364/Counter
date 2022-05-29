import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState} from "../Load&SaveModul/lockalStorage";

export type AppStateType = ReturnType <typeof rootReducer>;


const rootReducer = combineReducers({
    counter: counterReducer
});


export const store = createStore(rootReducer, loadState());

store.subscribe(()=>{
    localStorage.setItem('counterState', JSON.stringify(store.getState()));
});

