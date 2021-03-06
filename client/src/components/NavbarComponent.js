import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import ModalComponent from './ModalComponent';
import Forms from './Forms';
import { SIGN_UP, LOG_IN, 
  LOGIN_ERROR, USERNAME_ERROR, PASSWORD_ERROR,
  TC_ERROR } from '../utils/consts';
import API from '../utils/API';

class NavbarComponent extends Component {
  state = {
    signupEmail: "",
    signupPassword: "",
    loginEmail: "",
    loginPassword: "",
    terms: false,
    errors: new Set(),
    isOpen: false
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
      .then(() => {
        API.hasPlan()
        .then(() => {
          // if they do, show them
          this.setState({ errors: new Set() });
          window.location.href = "/calendar"
        }).catch(() => {
          // 404 no plan, redirect them to setup 
          window.location.href = "/setup"
        });
      })
      .catch(err => {
        // something went wrong with login
        const errors = this.state.errors;
        errors.add(LOGIN_ERROR);
        this.setState({ errors });
      });  
  };

  handleSignupFormSubmit = event => {
    event.preventDefault();
    const { signupEmail: username, signupPassword: password } = this.state;
    const user = { username, password };
    if (password.length < 6) {
      const errors = this.state.errors;
      errors.add(PASSWORD_ERROR);
      this.setState({ errors });
    } else if (!this.state.terms) {
      const errors = this.state.errors;
      errors.add(TC_ERROR);
      this.setState({ errors });
    } else {
      API.signUp(user)
      .then(() => {
        API.login(user)
        // new users don't have calendars, so send to setup page
        .then(() => {
          window.location.href = "/setup"
      });
      })
      .catch(() => {
        // username already exists
        const errors = this.state.errors;
        errors.add(USERNAME_ERROR);
        this.setState({ errors });
      })
    }
  };

  handleLogout = () => {
    API.logout()
      .then(function() {
        window.location.href = "/";
      });
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    let calendar = <NavItem><a href="/calendar" className="nav-link active"><strong>Calendar</strong></a></NavItem>;
    let logout = <NavItem><a href="#top" className="nav-link active" onClick={this.handleLogout}><strong>Log Out</strong></a></NavItem>;
    let login = null;
    let signup = null;
    if (!this.props.loggedIn) {
      calendar = null;
      logout = null;
      login =  <NavItem>
          <ModalComponent buttonLabel="Login" title="Login"><Forms formType={LOG_IN} onChange={this.handleInputChange} onClick={this.handleLoginFormSubmit} emailValue={this.state.loginEmail} passwordValue={this.state.loginPassword} errors={this.state.errors}/></ModalComponent>
        </NavItem>; 
      signup =  <NavItem>
          <ModalComponent buttonLabel="Sign Up" title="Sign Up"><Forms formType={SIGN_UP} onChange={this.handleInputChange} onClick={this.handleSignupFormSubmit} emailValue={this.state.signupEmail} passwordValue={this.state.signupPassword}  errors={this.state.errors}/></ModalComponent>
        </NavItem>;
    }

    return (
      <div>
        <Navbar className="bignav" color="light" light expand="md">
          <div className="desktoplogo">
          <NavbarBrand href="/"><h1><strong>train method<sup>tm</sup></strong></h1></NavbarBrand>
          </div>
          <div className="mobilelogo">
          <NavbarBrand href="/"><h2><strong>train method<sup>tm</sup></strong></h2></NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="active" href="/about"><strong>About</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="active" href="#"><strong>Blog</strong></NavLink>
              </NavItem>
              {calendar}
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