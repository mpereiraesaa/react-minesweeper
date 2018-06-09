import React, { Component } from "react";
import Modal from "react-bootstrap-modal";
import PropTypes from "prop-types";
import './gameover.css';

export default class GameOver extends Component {
    static propTypes = {
        open: PropTypes.bool,
        onHide: PropTypes.func
    }

    render() {
        return (
            <Modal show={this.props.open} onHide={this.props.onHide} className='gameover-container'>
                <Modal.Header>
                    <Modal.Title>
                        MINESWEEPER
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='gameover-body'>
                        <h1> GAME OVER </h1>
                    </div>
                </Modal.Body>
                <Modal.Footer className='gameover-buttons'>
                    <Modal.Dismiss className="btn btn-danger">
                        Accept
                    </Modal.Dismiss>
                </Modal.Footer>
            </Modal>
        );
    }
}
