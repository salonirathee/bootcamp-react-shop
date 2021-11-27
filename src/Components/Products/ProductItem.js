import Card from '../UI/Card';
import { connect } from 'react-redux';
import {
  addToCart,
  loadCurrentItem,
} from "../../Redux/shopping/shopping-actions";
import { NavLink } from "react-router-dom";

const ProductItem = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <Card>
      <div className="product col">
        <div className="row row-cols-2">
          <div className="col display-img">
            <img
              src={product.image}
              className="small-prod-img"
              alt={product.name}
            />
            <div className="overlay">
              <button
                className="cartbtn add_to_cart"
                onClick={() => addToCart(product.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="col product-detail">
            <h5 className="prod-name">{product.name}</h5>
            <p className="rating">{product.rating}</p>
            <p className="prod-price">Rs {product.price}</p>
            <div className="product-btn">
              <NavLink to={`product/${product.id}`}>
                <button
                  id="view-details-btn"
                  onClick={() => loadCurrentItem(product)}
                >
                  View Details
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
