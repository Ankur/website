//React Imports
import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

//My Created Files
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

class App extends React.Component {

  constructor(props) {
    super(props);
    /* States for the navbar */
    this.state = {
      title: 'Cjache Kang',
      headerLinks: [
        { title: 'Home', path: '/',
          title: 'About', path: '/about',
          title: 'Random', path: '/random' }
      ],
      home: {
        title: 'title',
        subTitle: 'subtitle',
        bodyText: 'blah blah blah'
      },
      about: {
        title: 'About Me',
      },
      random: {
        title: "Some Random Stuff I'm Working on",
        subTitle: 'subtitle',
        bodyText: 'blah blah blah'
      }
    }
  }

  render() {
    return (
      <Router>
        
        <Container className = "p-0" fluid = { true }>
          <Navbar className = "border-bottom" bg = "transparent" expand = "lg">
            <Navbar.Brand >Cjache's Website! (Work in Progress)</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-control="navbar-toggle"/>
            <Navbar.Collapse id = "navbar-toggle">
              <Nav className = "ml-auto">
                <Link className = "nav-link" to="/">Home</Link>
                <Link className = "nav-link" to="/about">About</Link>
                <Link className = "nav-link" to="/random">Random</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle = {this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle = {this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle = {this.state.home.subTitle} text={this.state.home.text} />} />

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
