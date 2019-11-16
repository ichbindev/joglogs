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
      .then(plan => {
        if (plan) {
          // if they do, show them
          window.location.href = "/calendar"
        } else {
          // if not, have them create one
          window.location.href = "/setup"
        }
      });
  };

  handleSignupFormSubmit = event => {
    event.preventDefault();
    const { signupEmail: username, signupPassword: password } = this.state;
    const user = { username, password };
    API.signUp(user)
      .then(() => API.login(user))
      // new users don't have calendars, so send to setup page
      .then(() => window.location.href = "/setup");
  };

  handleLogout = () => {
    API.logout()
    .then(function() {
      window.location.href = "/";
    })
  }

  // conditionally render login/signup vs logout
  renderUserButtons = () => {
    if (this.props.loggedIn) {
      return (<NavItem><a href="#top" className="nav-link active" onClick={this.handleLogout}>Log Out</a></NavItem>);
      
    }
    return (
      <div>
        <NavItem>
          <ModalComponent buttonLabel="Login" title="Login"><Forms formType={LOG_IN} onChange={this.handleInputChange} onClick={this.handleLoginFormSubmit} emailValue={this.state.loginEmail} passwordValue={this.state.loginPassword} />
          </ModalComponent>
        </NavItem>
        <NavItem>
          <ModalComponent buttonLabel="Sign Up" title="Sign Up"><Forms formType={SIGN_UP} onChange={this.handleInputChange} onClick={this.handleSignupFormSubmit} emailValue={this.state.signupEmail} passwordValue={this.state.signupPassword} />
          </ModalComponent>
        </NavItem>
      </div>);
  }


  render() {
    return (
      <div>
        <Navbar className="bignav" color="light" light expand="md">
          <NavbarBrand href="/"><h1><strong>train method<sup>tm</sup></strong></h1></NavbarBrand>
          <Collapse isOpen={true} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="active" href="/about"><strong>About</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="active" href="#"><strong>Blog</strong></NavLink>
              </NavItem>
              {console.log(this.props.loggedIn)}
              {this.renderUserButtons()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;