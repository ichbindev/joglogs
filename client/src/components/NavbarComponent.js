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
import { Redirect } from 'react-router-dom'
import { SETUP, CALENDAR, NO } from '../utils/consts';

class NavbarComponent extends Component {
  state = {
    signupEmail: "",
    signupPassword: "",
    loginEmail: "",
    loginPassword: "",
    // loggedIn: how do I tell?
  }
  
  setRedirect = (type) => {
    this.setState({
      redirect: type
    })
  }

  renderRedirect = () => {
    if (this.state.redirect !== NO) {
      if (this.state.redirect === CALENDAR) {
        return <Redirect to='/calendar' />;
      } else if (this.state.redirect === CALENDAR) {
        return <Redirect to='/setup' />;
      }
    }
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
    API.login(user)
      // check if user has any plans
      .then(() => API.hasPlan())
        .then(plan => {
          if (plan) {
            this.setRedirect(CALENDAR);
          } else {
            // if not, have them create one
            this.setRedirect(SETUP);
          }
        });
  };

  handleSignupFormSubmit = event => {
    event.preventDefault();
    const { signupEmail: username, signupPassword: password } = this.state;
    const user = {username, password};
    API.signUp(user)
      .then(() => API.login(user))
        // new users don't have calendars, so send to setup page
        .then(() => this.setRedirect(SETUP));
  };

  handleLogout = () => {
    API.logout();
  }


  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><h1><strong>jog logs</strong></h1></NavbarBrand>
          <Collapse isOpen={true} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="active" href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="active" href="#">Blog</NavLink>
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