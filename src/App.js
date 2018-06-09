import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Minesweeper</h1>
        </header>
        <div className="game-screen">
            <div className='game-table'>
                <div className='game-table__board'>
                    <div className='game-table__row'>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                    </div>
                    <div className='game-table__row'>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                    </div>
                    <div className='game-table__row'>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                    </div>
                    <div className='game-table__row'>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                    </div>
                    <div className='game-table__row'>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                    </div>
                    <div className='game-table__row'>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                    </div>
                    <div className='game-table__row'>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                        <div className='game-table__square'></div>
                    </div>
                </div>
            </div>
            <div className='sidebar'>
                <div className='sidebar__btns-container'>
                    <button className='btn btn-primary'>New game</button>
                    <button className='btn btn-primary'>Resume game</button>
                    <div className='form-group'>
                        <label>Columns</label>
                        <input type='number' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>Rows</label>
                        <input type='number' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>Mines</label>
                        <input type='number' className='form-control' />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
