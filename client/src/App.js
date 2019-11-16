import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Setup from "./pages/Setup";
import NotFound from "./pages/NotFound";
import Navbar from './components/NavbarComponent';
import Footer from  './components/Footer';
import Terms from  './pages/Terms';
import API from './utils/API';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false }
  }

  componentDidMount() {
    API.getUser()
    .then(response => {
      if (response) {
        this.setState({ loggedIn: true });
      }
    });
  }

  render = () => {
    return (
      <Router>
        <div>
        <Navbar loggedIn={this.state.loggedIn}/>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} loggedIn={this.state.loggedIn} />}/>
            <Route exact path="/about" render={(props) => <About {...props} loggedIn={this.state.loggedIn} />}/>
            <Route exact path="/contact" render={(props) => <Contact {...props} loggedIn={this.state.loggedIn} />}/>
            <Route exact path="/setup" render={(props) => <Setup {...props} loggedIn={this.state.loggedIn} />}/>
            <Route exact path="/calendar" render={(props) => <Calendar {...props} loggedIn={this.state.loggedIn} />}/>
            <Route exact path="/terms" render={(props) => <Terms {...props} loggedIn={this.state.loggedIn} />}/>
            <Route path="*" render={(props) => <NotFound {...props} loggedIn={this.state.loggedIn} />}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
