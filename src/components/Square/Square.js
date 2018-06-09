import React from "react";
import PropTypes from "prop-types";
import "./square.css";

Square.propTypes = {
    id: PropTypes.string.isRequired,
    onSquareClick: PropTypes.func.isRequired,
    clearedSquares: PropTypes.array.isRequired,
    countSquares: PropTypes.object.isRequired,
    flagList: PropTypes.array.isRequired,
    listBombs: PropTypes.array.isRequired,
    showAllMines: PropTypes.bool.isRequired,
};

function renderBomb(props) {
    if (props.listBombs.indexOf(props.id) >= 0) {
        return <i className="fa fa-bomb fa-2x" />;
    }
}

function renderInterrogation(props) {
    if (props.flagList.indexOf(props.id) >= 0) {
        return <i className="fa fa-question fa-2x" />;
    }
}

function renderCount(props) {
    let count = props.countSquares.hasOwnProperty(props.id) ? props.countSquares[props.id]: false;

    if (count) {
        return <h1>{count}</h1>;
    }
}

function isCleared(props) {
    return props.clearedSquares.indexOf(props.id) >= 0;
}

export default function Square(props) {
    const { id } = props;
    const isBlank = isCleared(props);

    return (
        <div
            className={`board-square ${isBlank ? "blank" : ""}`}
            onClick={e => props.onSquareClick(e, id)}
            onContextMenu={e => props.onSquareClick(e, id)}
        >
            {props.showAllMines ? renderBomb(props) : null}
            {renderInterrogation(props)}
            {renderCount(props)}
        </div>
    );
}
