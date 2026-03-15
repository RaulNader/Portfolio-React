import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar
        className={`main-nav navbar-expand-lg text-uppercase fixed-top ${
          scrolled ? "scrolled" : "py-4"
        }`}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            start framework
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to="about">
              about
            </Nav.Link>
            <Nav.Link as={NavLink} to="portfolio">
              portfolio
            </Nav.Link>
            <Nav.Link as={NavLink} to="contact">
              contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
