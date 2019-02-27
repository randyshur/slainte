import React, { Component } from 'react';
import { Link, Redirect} from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

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

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toLogin: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      subscribed: false,
      proprequest: false
    }
  }

  handleChange = (event) => {

    this.setState({
        [event.target.name]: event.target.value
    })

}

  handleSubmit = (event) => {
    fetch("http://localhost:3050/api/user/signup", {
      method: 'POST',
      body: JSON.stringify({user: this.state }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
      (response) => response.json()
    ).then((data) => {
      console.log(data.sessionToken)
      this.props.setToken(data.sessionToken)
      this.setState(() => ({toLogin: true}))
    })
    event.preventDefault();
  }


  render() {

    if (this.state.toLogin === true) {
      return <Redirect to='/signin' />
    }
    return (
      <React.Fragment>
        <Header>Sign Up</Header>
        <h1>Welcome to Slainte!</h1>
        <h6>Becoming a member gives you acces to the full bar.<br /><br />You may also indicateif you want to be notified when
          the bar changes.<br /><br />In the future we made add the capability for you to add to the bar. If you are interested in this option,
          please request to be a proprietor.
      </h6>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="firstName" sm={2}>First Name</Label>
            <Col sm={10}>
              <Input  onChange={this.handleChange} type="text" name="firstName" id="firstName" required />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="lastName" sm={2}>Last Name</Label>
            <Col sm={10}>
              <Input  onChange={this.handleChange} type="text" name="lastName" id="lastName" required />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={2}>Email</Label>
            <Col sm={10}>
              <Input  onChange={this.handleChange} type="email" name="email" id="email" placeholder="Enter email adddress" required />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="password" sm={2}>Password</Label>
            <Col sm={10}>
              <Input  onChange={this.handleChange} type="password" name="password" id="password" placeholder="password placeholder" required />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="subscribed" sm={1}></Label>
            <Col sm={{ size: 10 }}>
              <FormGroup check>
                <Label check>
                  <Input  onChange={this.handleChange} type="checkbox" id="subscribed" />{' '}
                  Check here to be notified when new items are added to the bar.
              </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="proprequest" sm={1}></Label>
            <Col sm={{ size: 10 }}>
              <FormGroup check>
                <Label check>
                  <Input  onChange={this.handleChange} type="checkbox" id="proprequest" />{' '}
                  Check here if you are interested in becoming a proprietor to be allowed
            to enter items to the bar. (Subject to approval)
              </Label>
              </FormGroup>
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

export default Signup;