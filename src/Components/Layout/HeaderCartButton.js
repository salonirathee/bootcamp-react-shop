

const HeaderCartButton= ({cartCount}) =>{

 return(
   <button className="cartbtn">
     <span><i class="fas fa-shopping-cart"></i></span>
     <span>Your Cart </span>
     <span className="badage"> ({cartCount})</span>
   </button>
 );
};

export default HeaderCartButton;