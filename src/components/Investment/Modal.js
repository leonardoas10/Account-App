import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Modal.css';
import FormDeposit from './Form';

class Modala extends Component {

    state = {
        show: false,
    };

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Button className="launch-buttom" variant="primary" onClick={this.handleShow}>
                    New Deposit
                </Button>

                <Modal className="modal-width" show={this.state.show} onHide={this.handleClose}> {/* responsive en iphone */}
                    <Modal.Header className="modal-title-new" closeButton>
                        <Modal.Title className="modal-title-new">New Deposit</Modal.Title>
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