import React, { useEffect } from "react";
import { Navbar, Products, Cart, Login, Signup, Admin} from './components'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { getStoreData } from './store/store-data-slice'

function App() {
  const dispatch = useDispatch();
  const adminIsAuth = useSelector((state) => state.adminAuth.adminIsAuth)
  
    useEffect(() => {
      dispatch(getStoreData())
        
    }, [dispatch])
  
  
  return ( 
    <Router>
      <div className="App">
        {!adminIsAuth && <Navbar />}

        <Switch>

        <Route exact path="/">
            <Products />
        </Route>


        <Route exact path="/cart">
            <Cart  />
        </Route>

        {/* <Route exact path="/admin">
            <Login />
        </Route> */}

        <Route exact path="/admin">
            {!adminIsAuth && <Signup />}
            {adminIsAuth && <Admin />}
        </Route>

        {/* <Route exact path="/admin/dashboard">
            <Admin />
        </Route> */}

          
        </Switch>
      </div>
    </Router>

  );
}

export default App;
