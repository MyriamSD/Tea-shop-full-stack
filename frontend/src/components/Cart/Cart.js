import React, { useState, useEffect } from "react";
import { Card, Container, Typography, Button, Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

import { connect } from "react-redux";




// const items = [
//     {id: 1 , name: 'Black Tea', description: '30g of our Classic black tea; a hand blended mix of whole leaf black tea that is certain to delight all of your senses', price: '15.99', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/IMG_4804_590x.jpg?v=1633806435' },
//     {id: 2, name: 'Green Tea', description: '30g of Fresh green tea leaves that are crafted by a gentle steam and dry technique to maximize the vivid fresh taste.', price: '15.99', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/IMG_4865_356ff9c4-dd36-4c07-b8d3-37018f16765d_295x.jpg?v=1634418464'},
//     {id: 3, name: 'Green Cleanse', description: '25g of loose leaf green tea with citrus, berry, and spicy notes combined in ayurvedic tea of bliss', price: '25.99', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/CLEANSE_800x.jpg?v=1582760796'},
//     {id: 4, name: 'White Tea', description: '30g of Organic loose leaf White tea with a smooth and savory comforting aroma.', price: '18.00', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/IMG_4184_1772x.jpg?v=1632189483'},
//     {id: 5, name: 'Oolong Tea', description: '30g of long, beautiful Oolong leaves create a smooth, rich flavor. 60-80% oxidized for a deep golden hue with a slightly peppery finish.', price: '22.50', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/IMG_4787_1200x.jpg?v=1633804161'},
//     {id: 6, name: 'Oolong Pineapple Medley', description: '25g We bring together notes of lychee and citrus with organic lemongrass and sweet pineapple for a truly unforgettable cup of Oolong tea', price: '30.00', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/20210711_ArtofTea__AudreyMa_0069_800x.jpg?v=1626114566'},
//     {id: 7, name: 'Matcha', description: '35g of Organic grade A matcha that provides a rich, complex taste and a boost of calm energy for the day. ', price: '20.00', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/MATCHA_GRADE_A_800x.jpg?v=1582421040'},
// ]


    // const classes = useStyles();
    // const isEmpty = true;
    // const EmptyCart = () => (
    //     <Typography variant='subtitle1'>Shopping Cart Empty</Typography>

    // )

    // const FilledCart = () => (
    //     <>
    //         <Grid container spacing={3}>

    //         </Grid>
    //     </>
    // )

    




  const Cart = ({ cart }) => {
      const classes = useStyles()
      const [totalPrice, setTotalPrice] = useState(0);
      const [totalItems, setTotalItems] = useState(0);
      const [subTotal, setSubTotal] = useState(0);
      let shipping = 5.95
    
      useEffect(() => {
        let items = 0;
        let price = 0;
        let shipping = 5.95;
        let subtotal = 0;
    
        cart.forEach((item) => {
          items += item.qty
          subtotal += item.qty * item.price
        });

        price += subtotal + shipping;
    
        setTotalItems(items);
        setTotalPrice(price.toFixed(2));
        setSubTotal(subtotal.toFixed(2));
      }, [cart, subTotal, setSubTotal, totalPrice, totalItems, setTotalPrice, setTotalItems]);


    

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
                <CartItem item={item} />
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
                          <span>{subTotal}</span>
                        </div>
                      

                        <div>
                          <h3>Estimated Shipping</h3>
                          <span>$ {shipping}</span>
                        </div>
                        {/* <div>
                          <h1>Shipping Discount</h1>
                          <span>$ -5.90</span>
                        </div> */}

                        <div type="total">
                          <h3>Total</h3>
                          <span>{totalPrice}</span>
                        </div>
                    </div>
                    <button className={classes.checkout}>CHECKOUT NOW</button>
                  </div>
        </main>


    )};

    const mapStateToProps = (state) => {
      return {
        cart: state.shop.cart,
      };
    };
    
    export default connect(mapStateToProps)(Cart);



// <main className={classes.content}>
        
//         <Typography variant="h2" component="h2">Your shopping cart</Typography>

//         <div>
//         {cart.length === 0 && <div>No Items</div>}
//         </div>
//         <Grid container justify='center' >
        
//             {items.map((items) => (
//                 <Grid item key={items.id} > 
//                 <CartItem item={items} />
//                 </Grid>
//             ))}
//         </Grid>
//         </main>
