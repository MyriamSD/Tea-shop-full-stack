import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'
import assets from '../../assets/assets';

import useStyles from './styles.js';
import Logo from '../../assets/logo4.jpg'

import { connect } from "react-redux";

 
const Navbar = ({ cart }) => {
    const classes = useStyles()
    const location = useLocation();
    const cartQty = useSelector((state) => state.cart.totalItems)
    // const [cartCount, setCartCount] = useState(0);

    // useEffect(() => {
    //     let count = 0;
    //     cart.forEach((item) => {
    //       count += item.qty;
    //     });
    
    //     setCartCount(count);
    //   }, [cart, cartCount]);

    
    return (
        <>

            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                        <img src={Logo} alt='Tea' height='25px' className={classes.image}/>
                        Tea Shop
                    </Typography>

                    <Typography component={Link} to='/login' variant='caption' className={classes.log} color='inherit'>
                        Log In  
                    </Typography>

                    <Typography component={Link} to='/Signup' variant='caption' className={classes.sign} color='inherit'>
                        Sign up 
                    </Typography>




                    <div className={classes.grow}/>
                    
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' arialabel='show cart items' color='inherit'>
                            <Badge badgeContent={ cartQty } color='secondary'>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>


                    </div>
                </Toolbar>


            </AppBar>
            
        </>
    )
}



export default Navbar;


