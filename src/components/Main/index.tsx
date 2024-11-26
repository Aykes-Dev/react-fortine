import { useQuery } from "react-query";
import { getData } from "../../api/getData";
import { Col, Row } from "react-bootstrap";
import CardItem from "../Card";
import { Preloader } from "../Preloader";
import { Basket, Cart } from "../Cart";
import { ICardItem } from "../../types";

import styles from "./styles/index.module.css";

interface Products {
  items: ICardItem[];
}

function Main() {
  const { isLoading, isError, data, error } = useQuery<Products>(
    ["products"],
    getData
  );

  if (isError) {
    return (
      <span>
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </span>
    );
  }

  if (isLoading) return <Preloader />;

  if (!data || data.items.length < 1) return <>No found.</>;

  return (
    <>
      <Row className={styles.cardContainer}>
        {data.items.slice(0, 12).map((item: ICardItem) => (
          <Col
            key={item.id}
            className="mt-5"
          >
            <CardItem {...item} />
          </Col>
        ))}
      </Row>
      <Cart />
      <Basket />
    </>
  );
}

export { Main };
