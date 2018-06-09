import React, { Component } from 'react';
import Board from '../Board/Board';
import Sidebar from '../Sidebar/Sidebar';
import './game.css';

export default class Game extends Component {
    render() {
        return (
            <div className="game-screen">
                <div className='game-table'>
                    <Board />
                </div>
                <Sidebar />
            </div>
        );
    }
}
