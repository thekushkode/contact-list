import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            emailValue: '',
            phoneValue: '',
            addressValue: '',
            cityValue: '',
            stateValue: '',
            zipValue: '',
        }
    }

    onContactAdd = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState({
            nameValue: '',
            emailValue: '',
            phoneValue: '',
            addressValue: '',
            cityValue: '',
            stateValue: '',
            zipValue: '',
        })
    }

    onNameChange = (e => {
        console.log(e.target.value);
        let newName = e.target.value;
        this.setState({
            nameValue: newName,
        })
    })
    onEmailChange = (e => {
        console.log(e.target.value);
        let newEmail = e.target.value;
        this.setState({
            emailValue: newEmail,
        })
    })
    onPhoneChange = (e => {
        console.log(e.target.value);
        let newPhone = e.target.value;
        this.setState({
            phoneValue: newPhone,
        })
    })
    onAddressChange = (e => {
        console.log(e.target.value);
        let newAddress = e.target.value;
        this.setState({
            addressValue: newAddress,
        })
    })
    onCityChange = (e => {
        console.log(e.target.value);
        let newCity = e.target.value;
        this.setState({
            cityValue: newCity,
        })
    })
    onStateChange = (e => {
        console.log(e.target.value);
        let newState = e.target.value;
        this.setState({
            stateValue: newState,
        })
    })
    onZipChange = (e => {
        console.log(e.target.value);
        let newZip = e.target.value;
        this.setState({
            zipValue: newZip,
        })
    })

    render() {
        return (
            <div className='Flex Margin'>
                <div>
                    <Form onSubmit={this.onContactAdd}>
                        <Form.Group controlId="formBasicName">
                            <Form.Control type="text" placeholder="Name" value={this.state.nameValue} onChange={this.onNameChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" value={this.state.emailValue} onChange={this.onEmailChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhone">
                            <Form.Control type="text" placeholder="Phone" value={this.state.phoneValue} onChange={this.onPhoneChange} />
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Control type="text" placeholder="Address" value={this.state.addressValue} onChange={this.onAddressChange} />
                        </Form.Group>

                        <Form.Group controlId="city">
                            <Form.Control type="text" placeholder="City" value={this.state.cityValue} onChange={this.onCityChange} />
                        </Form.Group>

                        <Form.Group controlId="state">
                            <Form.Control type="text" placeholder="State" value={this.state.stateValue} onChange={this.onStateChange} />
                        </Form.Group>

                        <Form.Group controlId="zip">
                            <Form.Control type="text" placeholder="Zip" value={this.state.zipValue} onChange={this.onZipChange} />
                        </Form.Group>

                        <Button variant="primary" type='submit'>
                            Add Contact
                        </Button>
                    </Form>
                </div>
                {/* <div className='Fifty'>
                    <h4>{this.state.nameValue}</h4>
                    <p>{this.state.emailValue}</p>
                    <p>{this.state.phoneValue}</p>
                    <p>{this.state.addressValue}</p>
                    <p>{this.state.cityValue}</p>
                    <p>{this.state.stateValue}</p>
                    <p>{this.state.zipValue}</p>
                </div> */}
            </div>
        )
    }
}

export default ContactForm;