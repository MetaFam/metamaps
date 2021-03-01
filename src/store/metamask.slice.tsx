import { createSlice } from '@reduxjs/toolkit';

export interface MetamaskInterface {
    enabled: boolean;
    accounts: Array<string>;
}

export const initialState: MetamaskInterface = {
    enabled: false,
    accounts: [],
}

export const MetamaskSlice = createSlice({
    name: 'metamask',
    initialState,
    reducers: {
        setEnabled(state, action) {
            state.enabled = action.payload;
        },
        setAccounts(state, action) {
            state.accounts = action.payload;
        },
    },
});

export const { setEnabled, setAccounts } = MetamaskSlice.actions;