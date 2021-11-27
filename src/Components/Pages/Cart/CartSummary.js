import React from "react";
import Card from "../../UI/Card";
import  {useState, useEffect} from "react";
import { connect } from "react-redux";
const CartSummary = ({cart}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <React.Fragment>
      <h4>Summary</h4>
      <Card>
        <div className="border-small"></div>
        <div>
          <input
            type="text"
            className="couponCode"
            placeholder="Enter Coupon Code"
          />
          <div className="summary__price">
            <div>Subtotal: {totalPrice}</div>
            <div>Shipping: FREE</div>
            <div>Taxes: NIL</div>
            <div><h5>Total: {totalPrice}</h5></div>
          </div>
        </div>
        
      </Card>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps) (CartSummary);
