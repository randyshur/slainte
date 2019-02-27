import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class SignIn extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    fetch("http://localhost:3050/api/user", {
      method: 'POST',
      body: JSON.stringify({ user: this.state }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
      (response) => response.json()
    ).then((data) => {
      this.props.setToken(data.sessionToken)
    })
    event.preventDefault();
  }

  checkUsername = () => {
    if (this.state.username) {
      return;
    } else {
      return (
        <p>user name is required</p>
      )
    }
  }

  close() {
    this.setState({ showModal: false });
  }


  render() {
    return (
      <div>
        <h1>Sign Up!</h1>
        <h1>Welcome to Slainte MemberSign Up!</h1>
        <h6>Becoming a member gives you acces to the full bar. You may also indicateif you want to be notified when
          the bar changes. In the future we made add the capability for you to add to the bar. If you are interested in this option,
          please request to be a proprietor.
      </h6>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
          </FormGroup>
          {this.checkUsername()}
          <FormGroup>
            <Label for="password">Password</Label>
            <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
          </FormGroup>
          <Button type="submit">Submit</Button>
          <Link to="/" className="danger"><Button>Close</Button></Link>
        </Form>
      </div>
    );
  }

}

export default SignIn;