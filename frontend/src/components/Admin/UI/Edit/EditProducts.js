import React from 'react'
import useStyles from './styles';
import { useSelector, typography } from 'react-redux'
import CurrentInventory from "./CurrentInventory/CurrentInventory";
import  AddProduct from './AddProduct/AddProduct';
import { Card, CardActions, CardHeader, CardContent, Typography, Paper, Grid} from '@material-ui/core';
import { gridClasses } from '@mui/x-data-grid';

const EditProducts = () => {
  const classes = useStyles()
  const inventory = useSelector((state) => state.products.products)
  return (
    <>
      <AddProduct />
      <Grid container justify='center' className={classes.content}>
          
          <Grid container justify='center' className={classes.table}>
          <Typography variant="h6" component="h2" className={classes.title}>Products</Typography>
              {inventory.map((item) => (
                  <Grid item xs={12} key={item.id}>
                      <Paper>
                          <CurrentInventory 
                          key={item.id}
                          name={item.name}
                          description={item.description}
                          price={item.price}
                          image={item.image}
                          id={item.id}
                          itemQuantity={item.quantity}
                          totalPrice={item.totalPrice}
                          qty={item.qty}
                          />
                      </Paper>
                  </Grid>
              ))}
          </Grid>          
      </Grid>
        
    </>
    
  )
}

export default EditProducts