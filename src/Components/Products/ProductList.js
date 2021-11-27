import ProductItem from './ProductItem';
import { connect } from 'react-redux';

const ProductList = ({products}) => {
  return (
    <div className="container" id="product-list">
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4 ">
        {products.map((prod) => (
          <ProductItem
            key={prod.id}
            product={prod}
          />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps=(state)=>{
  return{
    products:state.shop.products,
  };
}
export default connect(mapStateToProps)(ProductList);
