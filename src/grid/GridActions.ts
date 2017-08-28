import { Action } from 'redux';

export enum GridActionTypes {
    UPDATE_GRID_ROW,
}

export type GridActions =
    | UpdateGridRowAction;

export interface UpdateGridRowAction extends Action {
    type: GridActionTypes.UPDATE_GRID_ROW;
    e: AdazzleReactDataGrid.GridRowsUpdatedEvent;
}

export const updateGridRow: (event: AdazzleReactDataGrid.GridRowsUpdatedEvent) => UpdateGridRowAction = 
(event: AdazzleReactDataGrid.GridRowsUpdatedEvent) => ({
    type: GridActionTypes.UPDATE_GRID_ROW,
    e: event,
});