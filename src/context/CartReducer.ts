import type { CartItem } from "./CartContext";

export type Action = {
  type: "INCREASE" | "DECREASE";
  payload: number;
};

export const cartReducer = (state: CartItem[], action: Action) => {
  switch (action.type) {
    case "INCREASE":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: Math.min(item.quantity + 1, 99) }
          : item
      );

    case "DECREASE":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      );

    default:
      return state;
  }
};
