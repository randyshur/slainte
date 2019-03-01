import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class LookupIndex extends Component {

  render() {
    return (
      <Modal isOpen={true}>
        <div><Link to="/" className="danger">Close</Link><h6>{this.props.task}</h6>
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