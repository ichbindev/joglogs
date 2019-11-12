import React, { Component, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem 
} from 'reactstrap';
import ModalComponent from './ModalComponent';
import Forms from './Forms';
import { LOG_IN, SIGN_UP } from '../utils/consts';

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const state = {
      signupEmail: "",
      signupPassword: "",
      loginEmail: "",
      loginPassword: ""
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLoginFormSubmit = event => {
    
  };

  handleSignupFormSubmit = event => {
    
  };



  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">joglogs</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Blog</NavLink>
              </NavItem>
              <NavItem>
                <ModalComponent buttonLabel="Login" title="Login"><Forms formType={LOG_IN} onChange={this.handleInputChange} onClick={this.handleLoginFormSubmit}/></ModalComponent>
              </NavItem>
              <NavItem>
              <ModalComponent buttonLabel="Sign Up" title="Sign Up"><Forms formType={SIGN_UP} onChange={this.handleInputChange} onClick={this.handleSignupFormSubmit}/></ModalComponent>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;