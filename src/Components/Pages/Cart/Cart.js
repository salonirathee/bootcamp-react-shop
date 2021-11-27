// import React, {useState, useEffect} from "react";
import CartSummary from "./CartSummary";
import ShoppingCart from "./ShoppingCart";
import { connect } from "react-redux";

const Cart = ({cart}) => {
  return (
    <div class="container">
      <div className="row">
        <div className="col-9"><ShoppingCart cartProducts={cart}/></div>
        <div className="col-3"><CartSummary/></div>
      </div>
      <button className="btn-next" type="button">Next</button>
      <button className="btn-cancel" type="button">Cancel</button>
    </div>
    );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(Cart);
