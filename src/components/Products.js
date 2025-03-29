import { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";
import { useProductsContext } from "../context/ProductsContext";

const Products = ({ searchInput, filterQuery }) => {
  const {cart, addToCart, updateQuantity} = useCartContext();
  const {prodList} = useProductsContext();

  function priceRange(price) {
    if (price >= 0 && price <= 250) return "0-250";
    if (price > 250 && price <= 450) return "251-450";
    return "450";
  }

  const filterProducts = prodList.filter((product) => {
    const getSearch = product.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    const checkColor =
      filterQuery.length === 0 || filterQuery.includes(product.color);
    const checkGender =
      filterQuery.length === 0 || filterQuery.includes(product.gender);
    const checkType =
      filterQuery.length === 0 || filterQuery.includes(product.type);
    const checkPrice =
      filterQuery.length === 0 ||
      filterQuery.includes(priceRange(product.price));

    return getSearch && (checkColor || checkGender || checkType || checkPrice);
  });

  return (
    <>
      <div className="productsDiv">
        {filterProducts.map((product) => (
          <>
            <div className="productCard" key={product.id}>
              <img src={product.imageURL} className="productImg" />
              <h4>{product.name}</h4>
              <div className="cardBottom">
                <p className="price">Rs {product.price}</p>
                {cart[product.id] ? (
                  <div className="quantityActions">
                    <button onClick={() => updateQuantity(product, "minus")}>
                      -
                    </button>
                    <span>{cart[product.id]}</span>
                    <button onClick={() => updateQuantity(product, "add")}>
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="cartButton"
                    onClick={() => addToCart(product)}
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Products;
