import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class FormDeposit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) { this.setState({ startDate: date }); }

    render() {
        return (
            <Form>
                <Form.Group className="time-border">
                    <Form.Label className="time-label">Time</Form.Label>
                    <Form.Group className="time-border">
                        <DatePicker
                        className="time-border"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            timeCaption="time"
                        />
                    </Form.Group> 
                </Form.Group>
                <Form.Group controlId="formGroupEmail" className="time-border">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="email" placeholder="$" className="time-border" />
                </Form.Group>
            </Form>
        )
    }
}

export default FormDeposit;
