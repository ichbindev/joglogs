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
    errors: new Set()
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
    const user = { username, password };
    API.login(user)
      // check if user has any plans
      .then(() => API.hasPlan())
      .catch(err => {
        // something went wrong with login
        // display vague error
      })
      .then(plan => {
        // if they do, show them
        this.setState({ errors: new Set() });
        window.location.href = "/calendar"
      }).catch(err => {
        // 404 no plan, redirect them to setup 
        window.location.href = "/setup"
      });
  };

  handleSignupFormSubmit = event => {
    event.preventDefault();
    const { signupEmail: username, signupPassword: password } = this.state;
    const user = { username, password };
    API.signUp(user)
      .then(() => API.login(user))
      // new users don't have calendars, so send to setup page
      .then(() => {
        this.setState({ errors: new Set() });
        window.location.href = "/setup"
      });
  };

  handleLogout = () => {
    API.logout()
      .then(function() {
        window.location.href = "/";
      })
  }

  render() {
    let logout = <NavItem><a href="#top" className="nav-link active" onClick={this.handleLogout}><strong>Log Out</strong></a></NavItem>;
    let login = undefined;
    let signup = undefined;
    if (!this.props.loggedIn) {
      logout = undefined;
      login =  <NavItem>
          <ModalComponent buttonLabel="Login" title="Login"><Forms formType={LOG_IN} onChange={this.handleInputChange} onClick={this.handleLoginFormSubmit} emailValue={this.state.loginEmail} passwordValue={this.state.loginPassword} /></ModalComponent>
        </NavItem>; 
      signup =  <NavItem>
          <ModalComponent buttonLabel="Sign Up" title="Sign Up"><Forms formType={SIGN_UP} onChange={this.handleInputChange} onClick={this.handleSignupFormSubmit} emailValue={this.state.signupEmail} passwordValue={this.state.signupPassword} /></ModalComponent>
        </NavItem>;
    }


    return (
      <div>
        <Navbar className="bignav" color="light" light expand="md">
          <NavbarBrand href="/"><h1><strong>training method</strong></h1></NavbarBrand>
          <Collapse isOpen={true} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="active" href="/about"><strong>About</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="active" href="#"><strong>Blog</strong></NavLink>
              </NavItem>
              {logout}
              {login}
              {signup}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;