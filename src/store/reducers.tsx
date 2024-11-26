import { Order } from "../types";
import { initialState } from "./context";

export function reducer(
  state: typeof initialState,
  { type, payload }: { type: string; payload?: any }
) {
  switch (type) {
    case "ADD_PRODUCT_IN_BASKET": {
      return {
        ...state,
        order: state.order.reduce(
          (acc, item) => {
            if (item.id === payload.id) {
              acc.push({
                ...item,
                count: item.count + 1,
              });
            } else {
              acc.push(item);
            }
            return acc;
          },
          [
            ...(state.order.some((item) => item.id === payload.id)
              ? []
              : [
                  {
                    ...payload,
                    count: 1,
                  },
                ]),
          ]
        ),
      };
    }
    case "CHANGE_COUNT_PRODUCT": {
      const value = payload.type === "+" ? 1 : -1;
      const prevOrder = state.order.reduce((acc, e) => {
        if (e.id === payload.id) {
          acc.push({ ...e, count: Math.max(e.count + value, 0) });
        } else {
          acc.push(e);
        }
        return acc;
      }, [] as Order[]);

      return {
        ...state,
        order: prevOrder,
      };
    }
    case "SET_SHOW_BASKET":
      return {
        ...state,
        isShowBasket: !state.isShowBasket,
      };
    case "DELETE_PRODUCT_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((product) => product.id !== payload),
      };
    default:
      return state;
  }
}
