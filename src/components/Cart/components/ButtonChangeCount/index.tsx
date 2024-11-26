import { useContext } from "react";
import styles from "./styles/index.module.css";
import { ShopContext } from "../../../../store/context";

interface ButtonChangeCountProps {
  id: string;
  text: string;
}

function ButtonChangeCount({ id, text }: ButtonChangeCountProps) {
  const { changeCountProduct } = useContext(ShopContext);
  return (
    <span
      style={{ display: "inline-block", padding: "4px 10px 0 10px" }}
      onClick={() => changeCountProduct(id, text)}
    >
      <button className={styles.btn}>
        <div
          className={
            text === "+" ? styles.textIncrement : styles.textDincrement
          }
        >
          {text}
        </div>
      </button>
    </span>
  );
}

export { ButtonChangeCount };
