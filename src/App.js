import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/Form';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    }

  }

  addContact = (data) => {
    this.setState({
      contacts: this.state.contacts.concat(data),
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contact List</h1>
        </header>
        <div>
          <div className="Flex">
            <ContactForm onFormSubmit={this.addContact}></ContactForm>
            {this.state.contacts.map(contact => {
              return (
                <div>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{contact.nameValue}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{contact.emailValue}</Card.Subtitle>
                      <Card.Text>{contact.phoneValue}</Card.Text>
                      <Card.Text>{contact.addressValue}</Card.Text>
                      <Card.Text>{contact.cityValue}</Card.Text>
                      <Card.Text>{contact.stateValue}</Card.Text>
                      <Card.Text>{contact.zipValue}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
