import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class LookupIndex extends Component {

  render() {
    console.log(this.props.dog)
    return (
      <Modal isOpen={true}>
        <div><Link to="/" className="danger">Close</Link>
        </div>
        <ModalHeader></ModalHeader>
        <ModalBody>
          <div>
            <h1>Lookup Modal</h1>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

export default LookupIndex;