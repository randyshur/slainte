import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

import SignIn from './SignIn';

class User extends Component {

  render() {

    return (
      <div>
      <Modal isOpen={true}>
        <div><Link to="/" className="danger">Close</Link><h6>{this.props.task}</h6>
        </div>
        <ModalBody>
            <SignIn />
        </ModalBody>
      </Modal>
      </div>
    );
  }
}

export default User;