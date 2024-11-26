import { Col, Row, Spinner } from "react-bootstrap";

import styles from "./index.module.css";

function Preloader() {
  return (
    <Row className={styles.main}>
      <Col className={styles.spinerContainer}>
        <Spinner
          animation="border"
          variant="info"
        />
      </Col>
      <Col className={styles.textContainer}>
        <div>
          <span className={styles.text}>Loading...</span>
        </div>
      </Col>
    </Row>
  );
}

export { Preloader };
