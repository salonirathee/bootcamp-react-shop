import Header from "./Components/Layout/Header";
import { Switch, Route } from "react-router-dom";
import Help from "./Components/Pages/Help/Help";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Shop from "./Components/Pages/Shop/Shop";
import Footer from "./Components/Layout/Footer";
import React from "react";
import Cart from "./Components/Pages/Cart/Cart";
import ProductDetail from "./Components/Products/ProductDetail";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/product/:id" component={ProductDetail} />
      </Switch>
      <Footer />
      </React.Fragment>
  );
}

export default App;
