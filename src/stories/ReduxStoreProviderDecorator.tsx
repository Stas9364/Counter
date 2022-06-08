import React from 'react';
import {Provider} from "react-redux";
import {store} from "../Redux/reduxStore";
import {BrowserRouter} from "react-router-dom";


export const ReduxStoreProviderDecorator = (Story: any) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {Story()}
            </BrowserRouter>
        </Provider>
    )
}