import React from 'react'
import Inventory from './Inventory/Inventory';
import { useSelector, typography } from 'react-redux'
import {Grid, Paper, Typography, } from '@material-ui/core';

import useStyles from './styles'

const Dashboard = () => {
    const classes = useStyles()
    const inventory = useSelector((state) => state.products.products)
  return (
    <>
    <Grid container justify='center' className={classes.content}>
        
        <Grid container justify='center' className={classes.table}>
        <Typography variant="h6" component="h2" className={classes.title}>Products</Typography>
            {inventory.map((item) => (
                <Grid item xs={12} key={item.id}>
                    <Paper>
                        <Inventory 
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        id={item.id}
                        itemQuantity={item.quantity}
                        totalPrice={item.totalPrice}
                        />
                    </Paper>
                </Grid>
                

            ))}


        </Grid>
        
    </Grid>
        
    </>
  )
}

export default Dashboard