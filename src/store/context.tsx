import React, { useReducer } from "react";
import { createContext } from "react";
import { reducer } from "./reducers";

export const initialState: ContexType = {
  order: [],
  isShowBasket: false,
  addProduct: (payload: any) => undefined,
  setShow: () => undefined,
  changeCountProduct: (id: string, type: string) => undefined,
  deleteProduct: (id: string) => undefined,
};

interface Order {
  id: string;
  name: string;
  price: string;
  count: number;
}

interface ContexType {
  order: Order[];
  isShowBasket: boolean;
  addProduct: (id: string, name: string, price: string) => void;
  changeCountProduct: (id: string, type: string) => void;
  deleteProduct: (id: string) => void;
  setShow: () => void;
}

export const ShopContext = createContext<ContexType>(initialState);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addProduct = (id: string, name: string, price: string) => {
    dispatch({ type: "ADD_PRODUCT_IN_BASKET", payload: { id, name, price } });
  };

  const deleteProduct = (id: string) => {
    dispatch({ type: "DELETE_PRODUCT_FROM_BASKET", payload: id });
  };

  const changeCountProduct = (id: string, type: string = "+") => {
    dispatch({ type: "CHANGE_COUNT_PRODUCT", payload: { id, type } });
  };

  const setShow = () => {
    dispatch({ type: "SET_SHOW_BASKET" });
  };

  const value = {
    ...state,
    setShow,
    addProduct,
    deleteProduct,
    changeCountProduct,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
