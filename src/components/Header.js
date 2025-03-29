import cartIcon from "../assets/cartIcon.png";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Header = () => {
  const {cartCount} = useCartContext();
  return (
    <div className="header">
      <div className="leftHeader">
        <Link to="/" className="logo">TeeRex Store</Link>
      </div>
      <div className="rightHeader">
        <div className="actionTabs">
          <Link to="/" className="navLink">
            <span style={{color: '#fff'}}>Products</span>
          </Link>
          <Link to="/cart" className="cartLink">
            <div className="cartContainer">
              <img src={cartIcon} className="cartImg" alt="Cart" />
              <span className="cartCount">{cartCount}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
