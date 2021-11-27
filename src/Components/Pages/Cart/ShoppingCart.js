import React from "react";
import CartItem from "./CartItem";

const ShoppingCart = ({cartProducts}) => {
  
  return (
    <React.Fragment>
      <h4>Shopping Cart</h4>
      <div className="border-small"></div>
      <div className="cart-item">
        {cartProducts.map((item) => (
          <CartItem key={item.id}
            item={item}
          />))
        }
      </div>
    </React.Fragment>
  );
};

export default ShoppingCart;
