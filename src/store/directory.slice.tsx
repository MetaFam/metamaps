import { createSlice } from '@reduxjs/toolkit';
import { SetUrl } from '../eth/3box';

export interface ItemInterface {
    id: string;
    title: string;
    image: string;
    description: string;
    owner: string;
}

export interface DirectoryInterface {
    loading: boolean;
    error: boolean;
    errorMessage: string;
    input: string;
    items: Array<ItemInterface>;
}

export const initialState: DirectoryInterface = {
    loading: false,
    error: false,
    errorMessage: '',
    input: '',
    items: [],
}

export const DirectorySlice = createSlice({
    name: 'directory',
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload ?? false;
        },
        setError(state, action) {
            state.error = action.payload.error ?? false;
            state.errorMessage = action.payload.errorMessage ?? '';
        },
        setInput(state, action) {
            state.input = action.payload;
        },
        addItem(state, action) {
            state.input = '';
            state.items.unshift(action.payload);

            if (state.items.length > 0) {
                const owner = state.items[0].owner;
                SetUrl(owner, `metamaps-${owner}`, JSON.stringify(state.items));
            }
        },
        setItems(state, action) {
            state.items = action.payload ?? [];

            if (state.items.length > 0) {
                const owner = state.items[0].owner;
                SetUrl(owner, `metamaps-${owner}`, JSON.stringify(state.items));
            }
        },
    },
});

export const { setLoading, setError, setInput, addItem, setItems } = DirectorySlice.actions;