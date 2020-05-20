import React from 'react';
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  Link
} from "react-router-dom";
import {Link as LinkR,animateScroll as scroll} from 'react-scroll';
import Container from 'react-bootstrap/Container';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      title: "Smit Modi",
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Be Relentless',
        subTitle: 'Projects that make a difference',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Meet Me',
        subTitle: "Let’s create your next experience together"
      }
    }
  }
  scrollToTop = () =>{
    scroll.scrollToTop();
  };
  render()
  {
    return (
      <Router>
        <Container className="p=0" fluid={true}>
          <Navbar bg="transparent" expand="lg" fix="top" sticky="top">
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/" onClick={this.scrollToTop}>Home</Link>
                <LinkR
                  className="nav-link"
                  activeClass="active"
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration= {500}
                >Projects</LinkR>
                {/*<Link className="nav-link" to="/projects">Projects</Link>*/}
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>  
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
          <Route path="/projects" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} scrollToProject={true}/>}/>
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle}/>}/>
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle}/>}/>
        </Container>
        <Footer />
      </Router>
    );
  }
}
//<Navbar.Brand> Smit </Navbar.Brand>
export default App;
