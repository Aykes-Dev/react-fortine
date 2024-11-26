import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ICardItem } from "../../types";
import { useContext } from "react";
import { ShopContext } from "../../store/context";

import styles from "./index.module.css";


function CardItem(props: ICardItem) {
  const { addProduct } = useContext(ShopContext);

  return (
    <Card style={{ minWidth: "18rem" }}>
      <Card.Img
        variant="top"
        src={props.images.full_background}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button
          variant="primary"
          onClick={() => addProduct(props.id, props.name, props.price)}
        >
          Купить
        </Button>
        <span className={styles.price}>{props.price} руб.</span>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
