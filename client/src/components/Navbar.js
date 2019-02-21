import React from 'react';
import Background from '../assets/images/plank.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  const styles={
    navbar: {
      backgroundImage: "url(" + Background + ")",
      fontFamily: 'druidhill',
      color: 'white'
    },
    text: {
      color: 'white'
    },
    dropdown: {
      backgroundImage: "url(" + Background + ")"
    }
  }

export default class Sitebar extends React.Component {
  constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <div style={styles.navbar}>
        <Navbar expand="md" style={styles.navbar}>
          <NavbarBrand href="/" style={styles.text}>Sláinte</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#" style={styles.navbar}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={styles.navbar}>Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={styles.navbar}>Signup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={styles.navbar}>Signin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={styles.navbar}>Full List</NavLink>
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
                  <DropdownItem divider  style={styles.navbar}/>
                  <DropdownItem style={styles.navbar}>
                    Bottlers
                  </DropdownItem>
                  <DropdownItem style={styles.navbar}>
                    Finsishes
                  </DropdownItem>
                  <DropdownItem style={styles.navbar}>
                    Grains
                  </DropdownItem>
                  <DropdownItem style={styles.navbar}>
                    Notes
                  </DropdownItem>
                  <DropdownItem style={styles.navbar}>
                    Owners
                  </DropdownItem>
                  <DropdownItem style={styles.navbar}>
                    Ratings
                  </DropdownItem>
                  <DropdownItem style={styles.navbar}>
                    Regions
                  </DropdownItem>
                  <DropdownItem style={styles.navbar}>
                    Types
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      );
    }
}