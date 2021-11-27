import React from 'react';
import ProductList from '../../Products/ProductList';
import Title from './Title';
import SearchBar from './SearchBar';

const Home = () => {
  const changeHandler=(event)=>{
    console.log(event.target.value);
  };
  return (
    <main id="main">
      <SearchBar onChangeHandler={changeHandler}/>
      <Title/>
      <ProductList />
    </main>
  );
};
export default Home;
