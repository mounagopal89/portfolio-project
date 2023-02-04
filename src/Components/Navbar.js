import "./Navbar.css";
import { Link } from "react-router-dom";
// import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import {
  Navbar,
  Nav,
  // Form,
  // FormControl,
  // Button,
  NavDropdown,
} from "react-bootstrap";

const Navbar1 = () => {
  return (
    <Navbar className="color-nav" variant="light" expand="lg">
      <Container>
        <Navbar.Brand>Mounika Jakkani</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Weather">
                Weather App
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Movie">
                Movie App
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Todo App</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link as={Link} to="/Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;

// const Navbar = () => {
//   const [mobileResp, setMobileResp] = useState(false);
//   return (
//     <nav className="navbar">
//       <h1 className="header">Mounika Jakkani</h1>
//       <ul className={`nav-links ${mobileResp ? "nav-active" : ""}`}>
//         <li className="nav-item">
//           <Link to="/">Home</Link>{" "}
//         </li>{" "}
//         <li className="nav-item">
//           <Link to="/About">About</Link>{" "}
//         </li>{" "}
//         <li className="nav-item">
//           <Link to="/Projects">Projects</Link>{" "}
//         </li>{" "}
//         <li className="nav-item">
//           <Link to="/Contact">Contact</Link>{" "}
//         </li>
//       </ul>
//       <span className="nav-toggle" onClick={() => setMobileResp(!mobileResp)}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="25"
//           height="25"
//           fill="white"
//           className="bi bi-list"
//           viewBox="0 0 16 16"
//         >
//           <path
//             fillRule="evenodd"
//             d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
//           />
//         </svg>
//       </span>
//     </nav>
// );
// };
