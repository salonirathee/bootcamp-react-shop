import Card from "../../UI/Card";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../Redux/shopping/shopping-actions";
import { useState } from "react";

const CartItem = ({ item, adjustItemQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (event) => {
    setInput(event.target.value);
    adjustItemQty(item.id, event.target.value);
  };
  return (
    <Card>
      <div className="row" key={item.id}>
        <div className="col display-img col-3">
          <img src={item.image} className="small-prod-img" alt={item.name} />
        </div>
        <div className="col col-6">
          <div>{item.name}</div>
          <div>{item.description}</div>
          <div>Rs {item.price}</div>
        </div>
        <div className="col col-3 text-center totalItems">
          <label htmlFor="qty">Qty :</label>
          <input
            type="number"
            id="qty"
            step="1"
            min="1"
            max="5"
            onChange={onChangeHandler}
            value={input}
            className="text-center"
          />
          <button
            className="removeItem"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </Card>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    adjustItemQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
