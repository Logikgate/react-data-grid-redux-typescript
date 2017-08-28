import { Reducer, combineReducers } from 'redux';
import { AppState } from './AppState';
import { gridReducer } from '../grid/GridReducer';

export const appReducer: Reducer<AppState> = combineReducers<AppState>({
    grid: gridReducer,
});