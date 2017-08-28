import { Reducer } from 'redux';
import { GridState } from './GridState';
import { GridActionTypes, GridActions } from './GridActions';

const INIT_STATE: GridState = {
    rows: [
        {
            id: 1,
            name: 'testing',
        }
    ],
    columns: [
        {
            key: 'id',
            name: 'ID',
            width: 80,
        },
        {
            key: 'name',
            name: 'Name',
            width: 200,
            editable: true,
        }
    ]
};

export const gridReducer: Reducer<GridState> =
    (state = INIT_STATE, action: GridActions) => {
        switch (action.type) {
            case GridActionTypes.UPDATE_GRID_ROW : {
                const { fromRow, toRow, updated } = action.e;
                for (let i = fromRow; i <= toRow; i++) {
                    state.rows[i] = {...state.rows[i], ...updated};
                }

                return state;
            }
            default: {
                return state;
            }
        }
    };