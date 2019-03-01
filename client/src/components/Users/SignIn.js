import React, { Component } from 'react';
import { Link, Redirect} from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';
import APIURL from '../../helpers/environment';

const Header = styled.h6`
@import url('../../assets/fonts/druidhill-webfont.woff');
font-family: 'druidhill', sans-serif;
font-size: calc(12px + 5vw);
text-align: center;
-webkit-text-stroke: 1px red;
color: black;
text-shadow:
    3px 3px 0 #000,
  -1px -1px 0 #000,  
   1px -1px 0 #000,
   -1px 1px 0 #000,
    1px 1px 0 #000;
`;

class SignIn extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: '',
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {

    this.setState({
        [event.target.name]: event.target.value
    })

}

  handleSubmit = (event) => {
    fetch(`${APIURL}/api/user/signin`, {
      method: 'POST',
      body: JSON.stringify({ user: this.state }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
      (response) => response.json()
    ).then((data) => {
      console.log(data.sessionToken)
      this.props.setToken(data.sessionToken)
      this.setState(() => ({loggedIn: true}))
    })
    event.preventDefault();
  }

  close() {
    this.setState({ showModal: false });
  }


  render() {

    if (this.state.loggedIn === true) {
      return <Redirect to='/' />
    }

    return (
      <React.Fragment>
        <Header>Sign In</Header>
        <h1>Welcome Back to Slainte!</h1>
        <h6>Please log in to access the entire collection of spirits.</h6>
        <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
            <Label for="email" sm={2}>Email</Label>
            <Col sm={10}>
              <Input  onChange={this.handleChange} type="email" name="email" id="email" placeholder="Enter email adddress" required />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="password" sm={2}>Password</Label>
            <Col sm={10}>
              <Input  onChange={this.handleChange} type="password" name="password" id="password" placeholder="Enter password" required />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={{ size: 6 }} className="text-center"><Button type="submit" color="success">Submit</Button></Col>
            <Col sm={{ size: 6 }} className="text-center"><Link to="/"><Button color="danger">Close</Button></Link></Col>
          </FormGroup>
        </Form>
      </React.Fragment>
    );
  }

}

export default SignIn;