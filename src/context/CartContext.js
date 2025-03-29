import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
}

function loadCartData(){
    try{
        const existingCart = localStorage.getItem("cart");
        return existingCart ? JSON.parse(existingCart) : 0;
    }catch(error){
        console.log("Something is wrong", error);
        return {};
    }
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(loadCartData);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  function addToCart(product) {
    setCart((prevCart) => {
        const updatedCart = {
          ...prevCart,
          [product.id]: prevCart[product.id] ? prevCart[product.id] + 1 : 1,
        };
    
        console.log("Updated Cart:", updatedCart);
        return updatedCart;
      });
  }

  function updateQuantity(product, change) {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      const productId = product.id;
      const availableQuantity = product.quantity;
      console.log("avail", availableQuantity)
      if (change === "add") {
        if (updatedCart[productId] === undefined) {
          updatedCart[productId] = 0;
        }
        if (updatedCart[productId] < availableQuantity) {
          updatedCart[productId] = updatedCart[productId] + 1;
        } else {
          alert("Stock Limit Excceded");
        }
      } else if (change === "minus") {
        if (updatedCart[productId] > 1) {
          updatedCart[productId] = updatedCart[productId] - 1;
        } else {
          delete updatedCart[productId];
        }
      }
      return updatedCart;
    });
  }
  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0
  );
  console.log("cartCount", cartCount)
  return (
    <CartContext.Provider
      value={{ cart, cartCount, addToCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
