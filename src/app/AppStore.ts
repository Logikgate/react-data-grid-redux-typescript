import { AppState } from './AppState';
import { appReducer } from './AppReducer';
import { createStore, Store } from 'redux';

export const appStore: Store<AppState> =
    createStore(appReducer);