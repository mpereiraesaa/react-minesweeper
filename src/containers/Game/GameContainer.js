import React, { Component } from "react";
import Game from "../../components/Game/Game";

export default class GameContainer extends Component {
    state = {
        showGameOverScreen: false,
        table: {
            nRows: 9,
            nColumns: 9,
            nMines: 9
        }
    }

    handleSquarePress = (e, id) => {
        e.preventDefault();
        e.stopPropagation();

        let click = e.button === 0 ? "LEFT" : "RIGHT";

        return false;
    };

    HandleNewGamePress = () => {
        console.log("pressed");
    };

    setGameParameters = (payload) => {
        this.setState({
            table: {
                ...this.state.table, ...payload
            }
        });
    };

    setGameOverScreen = toShow => {
        this.setState({
            showGameOverScreen: toShow
        });
    };

    render() {
        return (
            <Game
                quitGameOverScreen={() => this.setGameOverScreen(false)}
                showGameOverScreen={this.state.showGameOverScreen}
                onSquareClick={this.handleSquarePress}
                setGameParameters={this.setGameParameters}
                tablePreferences={this.state.table}
            />
        );
    }
}
