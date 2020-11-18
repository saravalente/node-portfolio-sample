import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Sara Valente',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Portfolio', path: '/portfolio'},
      ],
      home: {
        title: 'Hi, I\'m Sara.',
        subTitle: 'I like to tell stories with data.',
        text: 'text here.'
      },
      portfolio: {
        title: 'Here is some of my work.'
      }
    }
  }

  render () {
    return (
      <Router>
        <Container className="p=0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Link className="nav-link" to="/">Sara Valente</Link>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle = {this.state.home.subTitle} text = {this.state.home.text} />} />
          <Route path="/portfolio" exact render={() => <PortfolioPage title={this.state.portfolio.title} />} />


          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
