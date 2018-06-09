import React, { Component } from "react";
import PropTypes from "prop-types";
import "./board.css";

export default class Board extends Component {
    static propTypes = {
        nRows: PropTypes.number.isRequired,
        nColumns: PropTypes.number.isRequired,
        renderSquare: PropTypes.func.isRequired
    };

    renderRows() {
        const { nRows, nColumns, renderSquare } = this.props;

        let rows = [];

        for (let i = 0; i < nRows; i++) {
            let columns = [];

            for (let j = 0; j < nColumns; j++) {
                let id = `${i}-${j}`;

                columns.push(
                    renderSquare(id)
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
