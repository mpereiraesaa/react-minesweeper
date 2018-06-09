import React, { Component } from "react";
import PropTypes from "prop-types";
import "./sidebar.css";

export default class Sidebar extends Component {
    static propTypes = {
        tablePreferences: PropTypes.object.isRequired,
        setGameParameters: PropTypes.func.isRequired,
        onUnlockPress: PropTypes.func.isRequired,
        onNewGamePress: PropTypes.func.isRequired,
        isGameRunning: PropTypes.bool.isRequired
    };

    state = {
        nRows: "",
        nColumns: "",
        nMines: ""
    };

    componentWillMount() {
        this.setState({
            ...this.props.tablePreferences
        });
    }

    onRowsChange = e => {
        let value = parseInt(e.target.value, 10);

        if (value < 3) {
            return false;
        }

        this.setState({
            nRows: value
        });

        this.props.setGameParameters({
            nRows: value
        });
    };

    onColumnsChange = e => {
        let value = parseInt(e.target.value, 10);

        if (value < 3) {
            return false;
        }

        this.setState({
            nColumns: value
        });

        this.props.setGameParameters({
            nColumns: value
        });
    };

    onMinesChange = e => {
        let value = parseInt(e.target.value, 10);

        if (value <= 0) {
            return false;
        }

        this.setState({
            nMines: value
        });

        this.props.setGameParameters({
            nMines: value
        });
    };

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__btns-container">
                    <button
                        className="btn btn-primary"
                        onClick={this.props.onNewGamePress}
                    >
                        New game
                    </button>
                    <button className="btn btn-primary" disabled={true}>
                        Resume game
                    </button>
                    <div className="form-group">
                        <label>Columns</label>
                        <input
                            type="number"
                            className="form-control"
                            disabled={this.props.isGameRunning}
                            value={this.state.nColumns}
                            onChange={this.onColumnsChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Rows</label>
                        <input
                            type="number"
                            className="form-control"
                            disabled={this.props.isGameRunning}
                            value={this.state.nRows}
                            onChange={this.onRowsChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mines</label>
                        <input
                            type="number"
                            className="form-control"
                            disabled={this.props.isGameRunning}
                            value={this.state.nMines}
                            onChange={this.onMinesChange}
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={this.props.onUnlockPress}
                        disabled={!this.props.isGameRunning}
                    >
                        Unlock Settings
                    </button>
                </div>
            </div>
        );
    }
}
