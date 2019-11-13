import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
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
import API from '../utils/API';

class NavbarComponent extends Component {
  state = {
    signupEmail: "",
    signupPassword: "",
    loginEmail: "",
    loginPassword: "",
    // loggedIn: how do I tell?
  }
  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLoginFormSubmit = event => {
    event.preventDefault();
    const { loginEmail: username, loginPassword: password } = this.state;
    const user = {username, password};
    API.login(user);
  };

  handleSignupFormSubmit = event => {
    event.preventDefault();
    const { signupEmail: username, signupPassword: password } = this.state;
    const user = {username, password};
    API.signUp(user).then(() => API.login(user));
  };

  handleLogout = () => {
    API.logout();
  }


  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><h1><strong>jog logs</strong></h1></NavbarBrand>
          <Collapse isOpen={true} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Blog</NavLink>
              </NavItem>
              {/* Only display these two if user is not logged in */}
              <NavItem>
                <ModalComponent buttonLabel="Login" title="Login"><Forms formType={LOG_IN} onChange={this.handleInputChange} onClick={this.handleLoginFormSubmit} emailValue={this.state.loginEmail} passwordValue={this.state.loginPassword}/></ModalComponent>
              </NavItem>
              <NavItem>
              <ModalComponent buttonLabel="Sign Up" title="Sign Up"><Forms formType={SIGN_UP} onChange={this.handleInputChange} onClick={this.handleSignupFormSubmit}emailValue={this.state.signupEmail} passwordValue={this.state.signupPassword}/></ModalComponent>
              </NavItem>
              {/* Log out button goes here! Display only if user is logged in */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;