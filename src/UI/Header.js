import { Fragment } from "react";
import Logo from "../Images/logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <Navbar variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt="QMovies  "
              src={Logo}
              width="50"
              height="30"
              className={classes.images}
            />{" "}
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/search">
              <div className={classes.search}>🔍</div>
            </Nav.Link>
            <Nav.Link href="/">
              <div className={classes.tabs}>HOME</div>
            </Nav.Link>
            <Nav.Link href="/movies">
              <div className={classes.tabs}>MOVIES</div>
            </Nav.Link>
            <Nav.Link href="/upcoming">
              <div className={classes.tabs}>UPCOMINGS</div>
            </Nav.Link>
            <Nav.Link href="/">
              <div className={classes.tabs}>EVENTS</div>
            </Nav.Link>
            <Nav.Link href="/">
              <div className={classes.tabs}>CONTACT</div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;