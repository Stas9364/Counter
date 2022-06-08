import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";
import App from "../App";

export default {
    title: 'App Component',
    component: App,
    decorators: [ReduxStoreProviderDecorator]
};

export const AppExample = () => {
    return (
        <App/>
    );
};