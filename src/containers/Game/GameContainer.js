import React, { Component } from "react";
import Game from "../../components/Game/Game";

export default class GameContainer extends Component {
    state = {
        showGameOverScreen: false,
    }

    handleSquarePress = e => {
        let click = e.button === 0 ? "LEFT" : "RIGHT";

        console.log(click);

        return click;
    };

    HandleNewGamePress = () => {
        console.log("pressed");
    };

    setGameParameters = () => {
        console.log("set");
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
            />
        );
    }
}
