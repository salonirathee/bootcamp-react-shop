import React from 'react';
import { connect } from 'react-redux';

const SearchBar = ({ products, changeHandler }) => {
  const submitHandler = (events) => {
    events.preventDefault();
  };
  return (
    <React.Fragment>
      <section id="section-1">
        <h1 className="slogan">A fresh approach to shopping.</h1>
        <div className="borderTag"></div>
        <div className="searchBar">
          <input
            type="search"
            id="search"
            placeholder="Enter product name..."
            onChange={changeHandler}
          />
          <button
            type="submit"
            className="btn-search"
            onClick={submitHandler}
            placeholder="Search.."
          >
            Submit
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};
export default connect(mapStateToProps)(SearchBar);
