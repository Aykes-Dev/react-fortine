import { Container } from "react-bootstrap";

import styles from "./styles/index.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <Container fluid="xl" className={styles.footer}>
        <span className={styles.textBox}>
          Все права защищены © 2023. Разработано с любовью.
        </span>
      </Container>
    </footer>
  );
}

export { Footer };
