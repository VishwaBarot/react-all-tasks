import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/day9.css';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand>React Tasks</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/day1"> Day1 </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/day2"> Day2 </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/day3"> Day3</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/day4"> Day4</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/day6"> Day6</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/day7"> Day7</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/day8"> Day8</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/day9"> Day9 </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/day10"> Day10 </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/day11"> Day11 </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/day12"> Day12 </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/day13"> Day13 </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
