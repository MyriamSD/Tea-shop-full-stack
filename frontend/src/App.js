import React, {useState , useEffect} from "react";
import { Products, Navbar, Cart, Login, Signup} from './components'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./Data";



// import { commerce } from './lib/commerce';

function App() {

  // const [products, setProducts] = useState([])
  
  const { products } = Data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((product) => products.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((products) =>
          products.id === product.id ? { ...exist, qty: exist.qty + 1 } : products
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  // const onRemove = (product) => {
  //   const exist = cartItems.find((products) => products.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((products) => products.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((products) =>
  //         products.id === product.id ? { ...exist, qty: exist.qty - 1 } : products
  //       )
  //     );
  //   }
  // };

  const countCartItems = cartItems.length;

  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();

  //   setProducts(data);
  // };

  // const fetchCart = async () => {
  //   setCart(await commerce.cart.retrieve());
  // };

  // const handleAddToCart = async (productId, quantity) => {
  //   const item = await commerce.cart.add(productId, quantity);

  //   setCart(item.cart);
  // };

// useEffect(() => {
//   fetchProducts();
//   // fetchCart();

// }, []);


  return ( 
    <Router>
      <div className="App">
        <Navbar />

        <Switch>

        

        <Route exact path="/">
            <Products />
        </Route>


        <Route exact path="/cart">
            <Cart  />
        </Route>

        <Route exact path="/login">
            <Login />
        </Route>

        <Route exact path="/signup">
            <Signup />
        </Route>


           
          
        </Switch>
      </div>
    </Router>

  );
}

export default App;
