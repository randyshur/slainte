import React from 'react';
import Background from '../assets/images/plank.png';
import UserModal from './Users/User';
import LookupModal from './Lookups/LookupIndex';

import { NavLink as RRDNavLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  const styles={
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

    render() {
      console.log('props--->' + this.props.bob)

      return (
        <div style={styles.navbar}>
        <Navbar expand="md" style={styles.navbar}>
          <NavbarBrand tag={RRDNavLink} exact to="/" activeClassName="active" style={styles.text}>Sláinte</NavbarBrand>
          <NavbarToggler onClick={this.toggle} style={styles.text}/>
          <Collapse isOpen={this.state.isOpen} navbar style={styles.text}>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRDNavLink} exact to={{pathname: "/signin"}} style={styles.navbar}>Signin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRDNavLink} exact to={{pathname: "/signup"}} style={styles.navbar}>Signup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRDNavLink} exact to={{pathname: "/updateinfo"}} style={styles.navbar}>Update Info</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRDNavLink} exact to="/distillery" style={styles.navbar}>Distilleries</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRDNavLink} exact to="/spirit"  style={styles.navbar}>Whiskies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={styles.navbar}>Item Display</NavLink>
              </NavItem>          
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={styles.navbar}>
                  Proprietor
                </DropdownToggle>
                <DropdownMenu right style={styles.dropdown}>
                  <DropdownItem style={styles.navbar}>
                    Distillery
                  </DropdownItem>
                  <DropdownItem style={styles.navbar}>
                    Spirit
                  </DropdownItem>
                  <DropdownItem divider style={styles.navbar}/>
                  <DropdownItem tag={RRDNavLink} exact to={{pathname: "/bottlers"}} style={styles.navbar}>
                    Bottlers
                  </DropdownItem>
                  <DropdownItem  tag={RRDNavLink} exact to={{pathname: "/finishes"}} style={styles.navbar}>
                    Finishes
                  </DropdownItem>
                  <DropdownItem tag={RRDNavLink} exact to={{pathname: "/grains"}} style={styles.navbar}>
                    Grains
                  </DropdownItem>
                  <DropdownItem tag={RRDNavLink} exact to={{pathname: "/notes"}} style={styles.navbar}>
                    Notes
                  </DropdownItem>
                  <DropdownItem tag={RRDNavLink} exact to={{pathname: "/owners"}} style={styles.navbar}>
                    Owners
                  </DropdownItem>
                  <DropdownItem tag={RRDNavLink} exact to={{pathname: "/ratings"}}  style={styles.navbar}>
                    Ratings
                  </DropdownItem>
                  <DropdownItem tag={RRDNavLink} exact to={{pathname: "/regions"}}  style={styles.navbar}>
                    Regions
                  </DropdownItem>
                  <DropdownItem tag={RRDNavLink} exact to={{pathname: "/types"}}  style={styles.navbar}>
                    Types
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        {
          this.props.slainteModal === 'User'  ? <UserModal task={this.props.task}/> : <div></div>
        }  
        {
          this.props.slainteModal === 'Lookup'  ? <LookupModal task={this.props.task}/> : <div></div>
        } 
      </div>
      );
    }
}