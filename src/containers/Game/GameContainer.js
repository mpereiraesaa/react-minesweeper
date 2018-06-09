import React, { Component } from "react";
import PropTypes from "prop-types";
import gameApi from "../../utils/gameApi";
import Game from "../../components/Game/Game";
import Square from "../../components/Square/Square";

export default class GameContainer extends Component {
    static propTypes = {
        onTimeStop: PropTypes.func.isRequired,
        onTimeReset: PropTypes.func.isRequired,
        onTimeRestart: PropTypes.func.isRequired
    };

    state = {
        showGameOverScreen: false,
        table: {
            nRows: 9,
            nColumns: 9,
            nMines: 9
        },
        isGameRunning: true,
        showAllMines: false,
        clearedSquares: [],
        flagList: [],
        listBombs: [],
        countSquares: {}
    };

    componentDidMount() {
        this.game = new gameApi(
            this.state.table.nRows,
            this.state.table.nColumns,
            this.state.table.nMines
        );

        this.firstClick = true;
    }

    isValidSquare = id => {
        if (this.state.flagList.indexOf(id) >= 0) {
            return false;
        }

        if (this.state.countSquares.hasOwnProperty(id)) {
            return false;
        }

        if (this.state.clearedSquares.indexOf(id) >= 0) {
            return false;
        }

        return true;
    };

    handleSquarePress = async (e, id) => {
        e.preventDefault();
        e.stopPropagation();

        if (!this.game) {
            alert(
                "Please click on NEW GAME after finish editing game parameters."
            );

            return false;
        }

        if (!this.isValidSquare(id)) {
            return false;
        }

        let click = e.button === 0 ? "LEFT" : "RIGHT";

        if (click === "LEFT") {
            let isBomb = false;

            if (this.firstClick) {
                this.game.bombsGenerator(id);

                this.setState({
                    listBombs: this.game.listBombs
                });

                this.firstClick = false;
            } else {
                isBomb = this.game.checkBomb(id);
            }

            if (isBomb) {
                await this.setState({
                    showAllMines: true
                });

                this.props.onTimeStop();
                this.setGameOverScreen(true);
            } else {
                let origAdyacents = this.game.getAdyacents(id);

                let count = this.game.getAdyacentsBombsCount(origAdyacents);

                if (count > 0) {
                    this.game.countSquares = {
                        ...this.game.countSquares,
                        [id]: count
                    };
                } else {
                    if (this.game.clearedSquares.indexOf(id) < 0) {
                        this.game.clearedSquares = [
                            ...this.game.clearedSquares,
                            id
                        ];
                    }

                    this.game.loopAdyacents(origAdyacents);
                }
            }
        } else {
            this.game.flagList.push(id);
        }

        const { clearedSquares, flagList, countSquares } = this.game;

        this.setState({
            clearedSquares,
            flagList,
            countSquares
        });

        return false;
    };

    handleNewGame = () => {
        this.setState({
            showAllMines: false,
            clearedSquares: [],
            flagList: [],
            listBombs: [],
            countSquares: {},
            isGameRunning: true
        });

        this.game = new gameApi(
            this.state.table.nRows,
            this.state.table.nColumns,
            this.state.table.nMines
        );

        this.props.onTimeRestart();

        this.firstClick = true;
    };

    setGameParameters = payload => {
        this.setState({
            table: {
                ...this.state.table,
                ...payload
            }
        });
    };

    setGameOverScreen = toShow => {
        this.setState({
            showGameOverScreen: toShow
        });
    };

    handleUnlockPress = () => {
        this.game = null;
        this.props.onTimeReset();

        this.setState({
            showAllMines: false,
            clearedSquares: [],
            flagList: [],
            listBombs: [],
            countSquares: {},
            isGameRunning: false
        });
    };

    quitGameOverScreen = () => {
        this.setGameOverScreen(false);

        this.game = null;

        this.setState({
            isGameRunning: false
        });
    };

    renderSquare = id => {
        return (
            <Square
                key={`key_${id}`}
                id={`${id}`}
                clearedSquares={this.state.clearedSquares}
                countSquares={this.state.countSquares}
                flagList={this.state.flagList}
                listBombs={this.state.listBombs}
                showAllMines={this.state.showAllMines}
                onSquareClick={this.handleSquarePress}
            />
        );
    };

    render() {
        return (
            <Game
                quitGameOverScreen={this.quitGameOverScreen}
                showGameOverScreen={this.state.showGameOverScreen}
                onNewGamePress={this.handleNewGame}
                renderSquare={this.renderSquare}
                isGameRunning={this.state.isGameRunning}
                setGameParameters={this.setGameParameters}
                onUnlockPress={this.handleUnlockPress}
                tablePreferences={this.state.table}
            />
        );
    }
}
