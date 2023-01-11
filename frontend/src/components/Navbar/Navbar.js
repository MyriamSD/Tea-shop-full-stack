import React from "react";
import { useSelector } from "react-redux";
import {AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core';
import {ShoppingCart } from '@material-ui/icons'
import { Link} from 'react-router-dom'


import useStyles from './styles.js';
import Logo from '../../assets/logo4.jpg'

 
const Navbar = () => {
    const classes = useStyles()
    const cartQty = useSelector((state) => state.cart.totalItems)
    
    return (
        <>

            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                        <img src={Logo} alt='Tea' height='25px' className={classes.image}/>
                        Tea Shop
                    </Typography>

                    <Typography component={Link} to='/admin/dashboard' variant='caption' className={classes.log} color='inherit'>
                        logout  
                    </Typography>

                    <Typography component={Link} to='/admin' variant='caption' className={classes.sign} color='inherit'>
                        Admin 
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


