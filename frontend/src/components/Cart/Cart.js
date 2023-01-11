import React from "react";
import {  Typography, Grid, Box } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

import { useSelector } from "react-redux";




  const Cart = () => {
    const cart = useSelector((state) => state.cart.cart)
    const totalItems = useSelector((state) => state.cart.totalItems)
    const subtotal = useSelector((state) => state.cart.cartTotalPrice).toFixed(2)
    const shipping = 5.95

    const finalPrice = Number(subtotal) + shipping
    const classes = useStyles()


    return (

        <main className={classes.content}>
        
        <Typography variant="h2" component="h2" className={classes.title}>Your shopping cart</Typography>

        <Box sx={{ flexDirection: 'row' , justifyContent: 'space-evenly' , alignItems: 'center', }} className={classes.bar}>
            <h3 className={classes.prod} >
                Product:
            </h3>

            <h3 className={classes.price} >
                Price:
            </h3>

            <Box sx={{ flexDirection: 'row' , justifyContent: 'space-between' , }}className={classes.more}>
                <h3 className={classes.col1}>qty:</h3>
                
                <h3 className={classes.col2}>total:</h3>
            </Box>
        </Box>

        <div>
        {cart.length === 0 && <div>Cart is empty</div>}
        </div>
        <Grid >
          
        
        {cart.map((item) => (
          <Grid item key={item.id} > 
            <CartItem
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              id={item.id}
              itemQuantity={item.quantity}
              totalPrice={item.totalPrice}
            />
          </Grid>
            ))}
        </Grid>

        <div className={classes.summary}>
                    <h1>ORDER SUMMARY</h1>

                    <div className={classes.details}>
                        <div>
                          <h3>Number of Items</h3>
                          <span>{totalItems}</span>

                          <h3>SubTotal</h3>
                          <span>{subtotal}</span>
                        </div>
                      

                        <div>
                          <h3>Estimated Shipping</h3>
                          <span>$ {shipping}</span>
                        </div>
               
                        <div type="total">
                          <h3>Total</h3>
                          <span>{finalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                    <button className={classes.checkout}>CHECKOUT NOW</button>
                  </div>
        </main>


    )};


    export default Cart;



