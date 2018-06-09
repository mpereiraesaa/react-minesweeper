import React, { Component } from "react";
import PropTypes from "prop-types";
import Square from "../Square/Square";
import "./board.css";

export default class Board extends Component {
    static propTypes = {
        nRows: PropTypes.number.isRequired,
        nColumns: PropTypes.number.isRequired,
        onSquareClick: PropTypes.func.isRequired
    };

    renderRows() {
        const { nRows, nColumns } = this.props;

        let rows = [];

        for (let i = 0; i < nRows; i++) {
            let columns = [];

            for (let j = 0; j < nColumns; j++) {
                columns.push(
                    <Square
                        key={`${i}-${j}`}
                        onSquareClick={this.props.onSquareClick}
                    />
                );
            }

            rows.push(
                <div className="board-row" key={`row-${i}`}>
                    {columns}
                </div>
            );
        }

        return rows;
    }

    render() {
        return <div className="board">{this.renderRows()}</div>;
    }
}
