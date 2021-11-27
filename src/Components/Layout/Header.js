import { Link } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Header = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <nav id="main-menu" class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand" href="#">
          E-Shopping
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse justify-content-end navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-link">Home</Link>
            <Link to="/about" class="nav-link">About</Link>
            <Link to="/shop" class="nav-link">Shop</Link>
            <Link to="/help" class="nav-link ">Help</Link>
            <Link to="/cart" class="nav-link ">
              <HeaderCartButton cartCount={cartCount} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Header);
