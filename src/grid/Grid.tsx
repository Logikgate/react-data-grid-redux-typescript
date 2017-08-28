import * as React from 'react';
import * as ReactDataGrid from 'react-data-grid';
import { GridRowsUpdatedEvent } from 'react-data-grid';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { updateGridRow } from './GridActions';
import { AppState } from '../app/AppState';

interface GridStateProps extends React.Props<Grid> {
    columns: AdazzleReactDataGrid.Column[];
    rows: [{}];
}

interface GridDispatchProps {
    onGridRowsUpdated: (e: GridRowsUpdatedEvent) => void;
}

export type GridProps = GridStateProps & GridDispatchProps;

export class Grid extends React.Component<GridProps, AppState> {
    constructor(props: GridProps) {
        super(props);
        this.rowGetter = this.rowGetter.bind(this);
    }

    render() {

        const { columns, rows } = this.props;
        
        return (
            <ReactDataGrid
                columns={columns}
                rowsCount={rows.length}
                rowGetter={this.rowGetter}
                onGridRowsUpdated={this.props.onGridRowsUpdated}
                enableCellSelect={true}
            />
        );
    }

    rowGetter(index: number) {
        if (index === undefined) {
            index = 0;
        }
        
        return this.props.rows[index];
    }
}

const mapStateToProps = (state: AppState): GridStateProps => ({
    columns: state.grid.columns,
    rows: state.grid.rows,
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): GridDispatchProps => ({
    onGridRowsUpdated(e: GridRowsUpdatedEvent) {
        dispatch(updateGridRow(e));
    }
});

export const GridContainer = connect(mapStateToProps, mapDispatchToProps)(Grid);