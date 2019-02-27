import React, { Component } from 'react';
import {Modal, ModalBody } from 'reactstrap';
import Background from '../../assets/images/modalbg50.png';

import SignIn from './SignIn';
import SignUp from './SignUp';


const styles={
  mstyle: {
    color: 'black',
    backgroundImage: 'url(' + Background + ')',
  },
  text: {
    color: 'pink'
  }
}

class User extends Component {

  constructor(props) {
    super(props)
    this.state = {

    };
  }

  userModal = () => {

    if (this.props.task === 'signin') {
      return (<SignIn setToken={this.props.setToken}/>);
    } else if (this.props.task === 'signup') {
      return (<SignUp setToken={this.props.setToken}/>);
    } else if (this.props.task === 'updateinfo') {
      return (<SignUp setToken={this.props.setToken}/>);
    }
  }

  render() {

    console.log('user')
    console.log(this.props)
    return (
      <div>
        <Modal isOpen={true}>
        <div className="modal-content" style={styles.mstyle}> 
          <ModalBody>
          
            {this.userModal()}
       
          </ModalBody>
          </div>
        </Modal>
       
      </div>
    );
  }
}

export default User;