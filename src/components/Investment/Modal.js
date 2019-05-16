import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Modal.css';
import FormDeposit from './Form';

class Modala extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Button className="launch-buttom" variant="primary" onClick={this.handleShow}>
                    New Transaction
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header className="modal-title-new" closeButton>
                        <Modal.Title className="modal-title-new">New Transaction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormDeposit/>
                    </Modal.Body>
                    <Modal.Footer className="modal-footer-new">
                        <Button className="launch-buttom-close" variant="secondary" onClick={this.handleClose}>
                            Close
                  </Button>
                        <Button className="launch-buttom-send" variant="primary" onClick={this.handleClose}>
                            Send
                  </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default Modala;