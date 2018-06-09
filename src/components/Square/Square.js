import React from "react";
import PropTypes from "prop-types";
import "./square.css";

Square.propTypes = {
    id: PropTypes.string.isRequired,
    isCleared: PropTypes.bool.isRequired,
    isCountSquare: PropTypes.bool.isRequired,
    isBomb: PropTypes.bool.isRequired,
    isFlagged: PropTypes.bool.isRequired,
    onSquareClick: PropTypes.func.isRequired
};

function renderBomb() {
    return <i className="fa fa-bomb fa-2x" />;
}

function renderInterrogation() {
    return <i className="fa fa-question fa-2x" />;
}

function renderCount() {
    return <h1>2</h1>;
}

export default function Square(props) {
    const { id, isCleared, isCountSquare, isBomb, isFlagged } = props;

    return (
        <div
            className={`board-square ${isCleared ? "blank" : ""}`}
            onClick={e => props.onSquareClick(e, id)}
            onContextMenu={e => props.onSquareClick(e, id)}
        >
            {renderCount()}
        </div>
    );
}
