import React, { Component } from "react";
import GameContainer from "../../containers/Game/GameContainer";
import { getCurrentGame, saveCurrentGame } from '../../utils/storage';
import "./App.css";

class App extends Component {
    state = {
        time: 0,
    };

    componentWillMount() {
        this.currentGame = null;

        this.currentGame = getCurrentGame();
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                time: this.state.time + 1
            });
        }, 1000);
    }

    onSave = (gameInstance) => {
        let gameObject = {};

        gameObject = {
            id: `minesweeper_${new Date().toISOString()}`,
            listBombs: gameInstance.listBombs,
            nRows: gameInstance.nRows,
            nColumns: gameInstance.nColumns,
            nMines: gameInstance.nMines,
            clearedSquares: gameInstance.clearedSquares,
            countSquares: gameInstance.countSquares,
            flagList: gameInstance.flagList,
            time: this.state.time
        }

        saveCurrentGame(gameObject);
    }

    resetTime = () => {
        this.setState({
            time: 0
        });
    };

    clearInterval = () => {
        clearInterval(this.interval);
    };

    handleTimeReset = () => {
        this.clearInterval();
        this.resetTime();
    };

    handleTimeRestart = () => {
        this.clearInterval();
        this.resetTime();

        this.interval = setInterval(() => {
            this.setState({
                time: this.state.time + 1
            });
        }, 1000);
    }

    handleTimeStop = () => {
        this.clearInterval();
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>{this.state.time}</h1>
                    <h1 className="App-title">Welcome to Minesweeper</h1>
                </header>
                <GameContainer
                    onSave={this.onSave}
                    currentGame={this.currentGame}
                    onTimeStop={this.handleTimeStop}
                    onTimeReset={this.handleTimeReset}
                    onTimeRestart={this.handleTimeRestart}
                />
            </div>
        );
    }
}

export default App;
