import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./styles/index.module.css";

import reactLogo from "./images/reactLogo.svg";

function Header() {
  return (
    <header className={styles.container}>
      <Container fluid="xl">
        <Navbar>
          <Container className="con">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={reactLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              React Fortnite
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </header>
  );
}

export { Header };
