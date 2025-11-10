import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({ cart: "" });

export const CartProvider = ({ children }: { children: any }) => {
  const [cart, setCart] = useState<any[]>(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: any) => {
    const Product = { ...product, id: Date.now() };
    setCart((prev) => [...prev, Product]);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;
    return sum + price * quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
