import React, { Component } from 'react';
import './sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
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
        );
    }
}
