import { createWrapper } from 'next-redux-wrapper';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { DirectorySlice } from './directory.slice';
import { MetamaskSlice } from './metamask.slice';

export const isServer = typeof window === 'undefined';
export const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

export const reducer = combineReducers({
    directory: DirectorySlice.reducer,
    metamask: MetamaskSlice.reducer,
});

export const initializeStore = (arg?) => configureStore({ reducer });

export function createStore(initialState) {
    if (isServer) {
        return initializeStore(initializeStore);
    }

    if (!window[__NEXT_REDUX_STORE__]) {
        window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
    }

    return window[__NEXT_REDUX_STORE__];
}
    
export const wrapper = createWrapper(createStore, { debug: false });
