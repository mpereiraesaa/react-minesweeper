import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from '../Board/Board';
import Sidebar from '../Sidebar/Sidebar';
import GameOver from '../Modals/GameOver';
import './game.css';

export default class Game extends Component {
    static propTypes = {
        showGameOverScreen: PropTypes.bool.isRequired,
        quitGameOverScreen: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="game-screen">
                <GameOver open={this.props.showGameOverScreen} onHide={this.props.quitGameOverScreen} />
                <div className='game-table'>
                    <Board />
                </div>
                <Sidebar />
            </div>
        );
    }
}
