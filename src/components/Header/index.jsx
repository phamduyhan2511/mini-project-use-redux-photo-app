import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Header.scss";
import { NavLink } from "react-router-dom";

Header.propTypes = {};

function Header() {
  return (
    <Fragment>
  
    
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://www.liverpool.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Easy Frontend
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
    </Fragment>
  );
}

export default Header;
