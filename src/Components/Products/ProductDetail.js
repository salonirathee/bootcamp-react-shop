import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/shopping/shopping-actions';

const ProductDetail = ({ currentItem, addToCart }) => {
  return (
    <div className="container product__detail__content">
      <div className="row">
        <div className="prod-image-content col col-6">
          <img
            className="large-prod-img"
            src={currentItem.image}
            alt={currentItem.name}
          />
        </div>
        <div className="item_details col col-6">
          <p className="details_title">{currentItem.name}</p>
          <p className="details_rating">{currentItem.rating}</p>
          <p className="details_description">{currentItem.description}</p>
          <p className="details_price">Rs {currentItem.price}</p>
          <button onClick={() => addToCart(currentItem.id)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
