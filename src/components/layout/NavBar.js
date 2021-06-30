import React from "react";
import { connect } from "react-redux";

import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";
import SI from "../PleaseSignin";

const NavBar = ({ logout, currentUser, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <SI />;
  }

  return (
    <Navbar
      collapseOnSelect
      className="navbarCulina"
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <NavDropdown
            title={`Hi ${currentUser && currentUser.name} `}
            id="nav-dropdown"
          >
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link eventKey={2} onClick={logout} href="/">
            Log Out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
NavBar.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapStateToProps = (store) => {
  return {
    currentUser: store.auth.user,
    isAuthenticated: store.auth.isAuthenticated,
    loading: store.auth.loading
  };
};

export default connect(mapStateToProps, { logout })(NavBar);
