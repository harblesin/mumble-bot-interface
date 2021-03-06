import React, { createContext, useReducer, useContext } from 'react';
import { LOADING } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case LOADING:
                return {
                    ...state,
                    auth: false,
                    user: null
                };
        default:
            return state;
    }
};

const defaultState = {
    auth: false,
    user: null
};

const StoreProvider = ({ value = defaultState, ...props }) => {
    const [state, dispatch ] = useReducer(reducer, value);

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };