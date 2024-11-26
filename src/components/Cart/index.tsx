import { Image, Modal } from "react-bootstrap";
import { ButtonChangeCount } from "./components/ButtonChangeCount";
import { useContext } from "react";
import { ShopContext } from "../../store/context";

import styles from "./styles/index.module.css";

import cart from "./images/cart2.svg";
import close from "./images/close2.svg";

function Cart() {
  const { order, setShow } = useContext(ShopContext);
  return (
    <div
      className={styles.container}
      onClick={setShow}
    >
      <Image
        src={cart}
        alt="cart"
        width={60}
        height={60}
      />
      <div className={styles.text}>{order.length}</div>
    </div>
  );
}

function Basket() {
  const { order, deleteProduct, isShowBasket, setShow } =
    useContext(ShopContext);
  const totalPrice = order.reduce(
    (total, elem) => total + elem.count * +elem.price,
    0
  );
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // fullscreen="lg-down"
      show={isShowBasket}
      onHide={setShow}
    >
      <Modal.Header closeButton>
        <Modal.Title>Корзина</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table>
          <tbody>
            {order.length > 0 ? (
              order.map((e) => (
                <tr
                  key={e.id}
                  className={styles.trTable}
                >
                  <th className={styles.nameContainer}>{e.name}</th>
                  <th className={styles.countContainer}>
                    <ButtonChangeCount
                      id={e.id}
                      text="-"
                    />
                    {e.count}
                    <ButtonChangeCount
                      id={e.id}
                      text="+"
                    />
                  </th>
                  <th className={styles.priceContainer}>
                    {(+e.price * e.count).toFixed(2)}
                  </th>
                  <th
                    className={styles.closeContainer}
                    onClick={() => deleteProduct(e.id)}
                  >
                    <Image
                      src={close}
                      alt="close"
                      width={26}
                      height={26}
                    />
                  </th>
                </tr>
              ))
            ) : (
              <div>Корзина пуста.</div>
            )}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <span className={styles.totalPrice}>
          Общая стоимость: {totalPrice.toFixed(2)} руб.
        </span>
      </Modal.Footer>
    </Modal>
  );
}

export { Cart, Basket };
