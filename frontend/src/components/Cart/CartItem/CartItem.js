import React from "react";
import { Box, IconButton } from '@material-ui/core'
import { Delete }from '@material-ui/icons'
import useStyles from './styles'

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";


const CartItem = (props) => {
  const {name, itemQuantity, totalPrice, price, image, id } = props;
  const dispatch = useDispatch()
  
  const addItemHandler = () => {
    dispatch(cartActions.addItem({
      id,
      image,
      price,
      name,
      itemQuantity,
      totalPrice
    }))
  }

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem({
      id,
      totalPrice,
      itemQuantity,
      image,
      price,
      name,
    }))
  }

  const deleteItemHandler = () => {
    dispatch(cartActions.deleteItem({
      id,
      totalPrice,
      itemQuantity,
      image,
      price,
      name,
    }))
  }
  // useEffect(() => {
  //   let items = 0;
  //   let price = 0;

  //   // cart.forEach((item) => {
  //     items += item.qty;
  //     price += item.qty * item.price;
  //   // });

  //   setTotalItems(items);
  //   setTotalPrice(price.toFixed(2));
  // }, [item, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  // let totalPrice = item.qty * item.price


  const classes = useStyles();
    
    return (
      
              
      <div className={classes.wrapper}>
        <Box sx={{ flexDirection: 'row' , justifyContent: 'space-evenly' , alignItems: 'center', }} className={classes.product}>
            <img src={props.image} className={classes.media} alt={props.name}/>
                       
                <span className={classes.name} >
                  {props.name}
                </span>


                <div className={classes.price}>
                ${props.price}
                </div>
            
                          
                   
            <Box  className={classes.edge} >
              <span className={classes.row}>
                <button onClick={removeItemHandler} type="button" size="small" className={classes.col}>-</button>
                <div className={classes.col}> {itemQuantity} </div>
                <button onClick={addItemHandler} type="button" size="small" className={classes.col}>+</button>
              </span>
              <div className={classes.total}>{totalPrice.toFixed(2)}</div>
              <IconButton style={{ marginLeft: 55}} aria-label="Delete Item"  onClick={deleteItemHandler}>
                <Delete />
              </IconButton>
            </Box>
                   
            <hr />
                   
        </Box>        
      </div>
              
     
      
    );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
//     removeFromCart: (id) => dispatch(removeFromCart(id)),
//     addToCart: (id) => dispatch(addToCart(id)),
//     removeOneFromCart: (id) => dispatch(removeOneFromCart(id)),
//   };
// };

// export default connect(null, mapDispatchToProps)(CartItem);
export default CartItem


