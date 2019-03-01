import React from 'react';
import Background from '../assets/images/plank.png';
import UserModal from './Users/User';
import LookupModal from './Lookups/LookupIndex';

import { NavLink as RRDNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  Button,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const styles = {
  navbar: {
    background: "red",
    backgroundImage: "url(" + Background + ")",
    fontFamily: 'druidhill',
    color: 'white',
    height: '5vh'
  },
  text: {
    color: 'white'
  },
  navbarToggle: {
    color: 'white'
  },
  navbarDefault: {
    color: 'white'
  },
  iconBar: {
    color: 'white'
  },
  dropdown: {
    backgroundImage: "url(" + Background + ")"
  }
}

export default class Sitebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.goHome = this.goHome.bind(this)
  }

  goHome() {
    alert('hello' + this.state.bob)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  memberMenuItems = () => {
    //console.log('local--->' + localStorage.getItem('token'))
    //console.log('state--->' + this.props.sessionToken)
    //console.log((this.props.sessionToken === localStorage.getItem('token')))
    //if (true){
    if (localStorage.getItem('token')){
      //if (false){
      return (
        <React.Fragment>
          <NavItem>
            <NavLink tag={RRDNavLink} exact to="/distillery" style={styles.navbar}>Distilleries</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRDNavLink} exact to="/spirit" style={styles.navbar}>Whiskies</NavLink>
          </NavItem>
          <NavItem>
            <Button onClick={() => this.props.clickLogout()}>Logout</Button>
          </NavItem>
        </React.Fragment >
      )
    } else {
      return (
        <React.Fragment>
          <NavItem>
            <NavLink tag={RRDNavLink} exact to={{ pathname: "/signin" }} style={styles.navbar}>Signin</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRDNavLink} exact to={{ pathname: "/signup" }} style={styles.navbar}>Signup</NavLink>
          </NavItem>
        </React.Fragment>

      )
    }

  }

  proprietorMenuItems = () => {
    if (localStorage.getItem('token')){
      return (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret style={styles.navbar}>
            Proprietor
          </DropdownToggle>
          <DropdownMenu right style={styles.dropdown}>
          <DropdownItem tag={RRDNavLink} exact to={{ pathname: "/distilleryprop" }} style={styles.navbar}>
              Distillery
            </DropdownItem>
            <DropdownItem tag={RRDNavLink} exact to={{ pathname: "/spiritprop" }} style={styles.navbar}>
              Spirit
            </DropdownItem>
            <DropdownItem divider style={styles.navbar} />
            <DropdownItem tag={RRDNavLink} exact to={{ pathname: "/bottlers" }} style={styles.navbar}>
              Bottlers
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

      )
    }
  }

  render() {

    return (
      <div style={styles.navbar}>
        <Navbar expand="md" style={styles.navbar}>
          <NavbarBrand tag={RRDNavLink} exact to="/" activeClassName="active" style={styles.text}>Sláinte</NavbarBrand>
          <NavbarToggler onClick={this.toggle} style={styles.text} />
          <Collapse isOpen={this.state.isOpen} navbar style={styles.text}>
            <Nav className="ml-auto" navbar>
              {this.memberMenuItems()}
              {this.proprietorMenuItems()}
            </Nav>
          </Collapse>
        </Navbar>
        {
          this.props.slainteModal === 'User' ? <UserModal task={this.props.task} setToken={this.props.setToken}/> : <div></div>
        }
        {
          this.props.slainteModal === 'Lookup' ? <LookupModal task={this.props.task} /> : <div></div>
        }
      </div>
    );
  }
}