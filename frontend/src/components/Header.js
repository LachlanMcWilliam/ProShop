import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import { LinkContainer } from "react-router-bootstrap";

const links = [
  {
    route: "/cart",
    text: "Cart",
    icon: "fas fa-shopping-cart",
  },
  {
    route: "/login",
    text: "Sign In",
    icon: "fas fa-user",
  },
];

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {links.map((link) => {
                return (
                  <LinkContainer to={link.route} key={link.route}>
                    <Nav.Link>
                      <i className={link.icon}></i> {link.text}
                    </Nav.Link>
                  </LinkContainer>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
