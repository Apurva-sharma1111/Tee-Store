import emptyCartImg from '../assets/empty-cart.png'
const EmptyCart = () => {
    return (
      <div className="emptyCartContainer">
        <img src={emptyCartImg} alt="Empty Cart" className="emptyCartImage" />
        <p>Your cart is empty</p>
      </div>
    );
  };
  
  export default EmptyCart;