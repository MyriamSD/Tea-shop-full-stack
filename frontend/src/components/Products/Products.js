import React from 'react';
import { useSelector } from 'react-redux';
import {Grid} from '@material-ui/core';
import Tea from './Tea/Tea';
import useStyles from './styles'



const Products = () => {

  const products =useSelector((state) => state.products.products)    
  const classes = useStyles();


    return (
      
        <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify='center' spacing={4}>
        {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                <Tea 
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                id={product.id}
                />
                </Grid>
            ))}
        </Grid>
        </main>

    )};

      export default Products;
    