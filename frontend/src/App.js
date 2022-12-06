import React, {useState , useEffect, useCallback} from "react";
import { Navbar, Products, Cart, Login, Signup} from './components'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { getStoreData } from './store/store-data-slice'
// import Data from "./Data";
// import axios from "axios";



// import { commerce } from './lib/commerce';

function App() {
  const dispatch = useDispatch();

   const [products, setProducts] = useState([])
  
  

  // const fetchProducts = useCallback(async () => {
  //   try{
  //     const response = await fetch('http://localhost:5000')
  //     const data = await response.json()
  //     console.log(data)

  //     const transformedData = data.results.map(data => {
  //       return {
  //         id: data.id,
  //         name: data.name,
  //         description: data.description,
  //         price: data.price,
  //         image: data.imageUrl,
  //       };
  //     })
      
  //     setProducts(transformedData);
      
      
  //   }catch{
      
  //   }

  // }, [])
  
    useEffect(() => {
      dispatch(getStoreData())
    //     const fetchData = async () => {
    //       axios.get('http://localhost:5000').then(
    //         (response) => {
    //           // setData(data => [...data, response.data])
              
    //           prods.push(response)
    //           console.log(prods[0].data)

    //         })
            
    // }
        // fetchProducts()
        
    }, [dispatch])
  
  
  // const { products } = Data;
  // console.log(Data)
  // const [cartItems, setCartItems] = useState([]);
  // const onAdd = (product) => {
  //   const exist = cartItems.find((product) => products.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((products) =>
  //         products.id === product.id ? { ...exist, qty: exist.qty + 1 } : products
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };
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

  // const countCartItems = cartItems.length;

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
            <Products products = {products}/>
        </Route>


        <Route exact path="/cart">
            <Cart  />
        </Route>

        {/* <Route exact path="/login">
            <Login />
        </Route>

        <Route exact path="/signup">
            <Signup />
        </Route> */}


           
          
        </Switch>
      </div>
    </Router>

  );
}

export default App;
