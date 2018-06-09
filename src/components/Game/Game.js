import React, { Component } from "react";
import PropTypes from "prop-types";
import Board from "../Board/Board";
import Sidebar from "../Sidebar/Sidebar";
import GameOver from "../Modals/GameOver";
import "./game.css";

export default class Game extends Component {
    static propTypes = {
        showGameOverScreen: PropTypes.bool.isRequired,
        quitGameOverScreen: PropTypes.func.isRequired,
        onNewGamePress: PropTypes.func.isRequired,
        isGameRunning: PropTypes.bool.isRequired,
        renderSquare: PropTypes.func.isRequired,
        setGameParameters: PropTypes.func.isRequired,
        onUnlockPress: PropTypes.func.isRequired,
        tablePreferences: PropTypes.object.isRequired,
    };

    render() {
        const { nRows, nColumns } = this.props.tablePreferences;

        return (
            <div className="game-screen">
                <GameOver
                    open={this.props.showGameOverScreen}
                    onHide={this.props.quitGameOverScreen}
                />
                <div className="game-table">
                    <Board
                        renderSquare={this.props.renderSquare}
                        nRows={nRows}
                        nColumns={nColumns} />
                </div>
                <Sidebar
                    tablePreferences={this.props.tablePreferences}
                    isGameRunning={this.props.isGameRunning}
                    onUnlockPress={this.props.onUnlockPress}
                    onNewGamePress={this.props.onNewGamePress}
                    setGameParameters={this.props.setGameParameters}
                />
            </div>
        );
    }
}
