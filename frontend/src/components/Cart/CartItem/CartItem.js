import React, { useState, useEffect} from "react";
import { Box, Card, CardMedia, CardContent, CardActions, Typography, IconButton, Divider, } from '@material-ui/core'
import { AddShoppingCart, Delete }from '@material-ui/icons'
import useStyles from './styles'
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
  addToCart,
  removeOneFromCart,
} from "../../../Redux/Shopping/shopping-actions";
import Cart from "../Cart";










const CartItem = ({ cart, item, adjustQty, removeOneFromCart, addToCart, removeFromCart, }) => {

  const [input, setInput] = useState(item.qty);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    // cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    // });

    setTotalItems(items);
    setTotalPrice(price.toFixed(2));
  }, [item, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  // let totalPrice = item.qty * item.price


  const classes = useStyles();
    
    return (
      
              
      <div className={classes.wrapper}>
        <Box sx={{ flexDirection: 'row' , justifyContent: 'space-evenly' , alignItems: 'center', }} className={classes.product}>
            <img src={item.image} className={classes.media}/>
                       
                <span className={classes.name} >
                  {item.name}
                </span>


                <div className={classes.price}>
                ${item.price}
                </div>
            
                          
                   
            <Box  className={classes.edge} >
              <span className={classes.row}>
                <button onClick={() => removeOneFromCart(item.id)} type="button" size="small" className={classes.col}>-</button>
                <div className={classes.col}> {totalItems} </div>
                <button onClick={() => addToCart(item.id)} type="button" size="small" className={classes.col}>+</button>
              </span>
              <div className={classes.total}>{totalPrice}</div>
              <IconButton style={{ marginLeft: 55}} aria-label="Delete Item"  onClick={() => removeFromCart(item.id)}>
                <Delete />
              </IconButton>
            </Box>
                   
            <hr />
                   
        </Box>        
      </div>
              
     
      
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    addToCart: (id) => dispatch(addToCart(id)),
    removeOneFromCart: (id) => dispatch(removeOneFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);


