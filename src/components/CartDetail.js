import { useCartContext } from "../context/CartContext";
import { useProductsContext } from "../context/ProductsContext";
import EmptyCart from "./EmptyCart";

const CartDetail = () => {
  const { prodList } = useProductsContext();
  const { cart, updateQuantity } = useCartContext();

  const cartItems = prodList.filter((product) => cart[product.id]);

  const totalAmount = cartItems.reduce((total, item) => {
    const quantity =
      cart[item.id] !== undefined && cart[item.id] !== null ? cart[item.id] : 0;
    const price =
      item.price !== undefined && item.price !== null ? item.price : 0;
    return total + quantity * price;
  }, 0);
  console.log("total", totalAmount);

  return (
    <>
      <div className="shoppingContainer">
        {cartItems.length > 0 ? (
          <>
            <h3 className="shopping-cart-title">
              Shopping Cart
            </h3>
            {cartItems.map((item) => (
              <div className="cartItem" key={item.id}>
                <div className="shoppingCartImg">
                  <img src={item.imageURL} alt={item.name} />
                </div>
                <div className="cartDetails">
                  <p className="itemName">
                    <strong>{item.name}</strong>
                  </p>
                  <p className="itemPrice">Rs. {item.price}</p>
                </div>
                <div className="cartQuantity">
                  <button onClick={() => updateQuantity(item, "minus")}>
                    -
                  </button>
                  <span>{cart[item.id] || 0}</span>
                  <button onClick={() => updateQuantity(item, "add")}>+</button>
                </div>
                <div className="cartDelete">
                  <button
                    className="deleteBtn"
                    onClick={() => updateQuantity(item, "minus")}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <hr />
            <div className="totalCartAmount">
              <strong>Total amount</strong>
              <span
                style={{
                  fontSize: "15px",
                  marginLeft: "10px",
                  color: "#333",
                }}
              >
                Rs. {totalAmount}
              </span>
            </div>
          </>
        ) : (
          <div className="emptyCartWrapper">
            <EmptyCart />
          </div>
        )}
      </div>
    </>
  );
};

export default CartDetail;
