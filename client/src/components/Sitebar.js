import React from 'react';
import ReactDOM from 'react-dom';
import Background from '../assets/images/plank.png';
import Lookup from './Lookups/LookupIndex';
import { NavLink as RRDNavLink, Route } from 'react-router-dom';
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
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    showFinish = () => {
      //alert('hello there');
      ReactDOM.render(<Lookup />);
    }

    render() {

      let  coby = 'Doggie';

      return (
        <div style={styles.navbar}>
        <Navbar expand="md" style={styles.navbar}>
          <NavbarBrand tag={RRDNavLink} exact to="/" activeClassName="active" style={styles.text}>Sláinte</NavbarBrand>
          <NavbarToggler onClick={this.toggle} style={styles.text}/>
          <Collapse isOpen={this.state.isOpen} navbar style={styles.text}>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#" style={styles.navbar}>Signup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={styles.navbar}>Update Info</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={styles.navbar}>Signin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRDNavLink} exact to="/distillery" activeClassName="active"  style={styles.navbar}>Distilleries</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  tag={RRDNavLink} exact to="/spirit" activeClassName="active"  style={styles.navbar}>Whiskies</NavLink>
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
                  <DropdownItem tag={RRDNavLink} exact to={{
    pathname: "/lookup",
    state: { modal: true }
  }} activeClassName="active"  style={styles.navbar}>
                    Grains
                  </DropdownItem>
                  <DropdownItem style={styles.navbar} onClick={this.showFinish}>
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
        <Route exact path="/lookup" render={()=><Lookup dog={coby} />}/>
      </div>
      );
    }
}