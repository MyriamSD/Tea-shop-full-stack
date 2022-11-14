import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import { AddShoppingCart }from '@material-ui/icons'
import useStyles from './styles'
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../Redux/Shopping/shopping-actions";



const Tea = ({ product, addToCart, loadCurrentItem }) => {
    const classes = useStyles();
    
    
    return (
        <Card className={classes.root} style={{height: '450px'}}>
      <CardMedia className={classes.media} image={product.image} title={product.name} />
      <CardContent style={{height: '150px'}}>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary" component="p">{product.description} </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart"  onClick={() => addToCart(product.id)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Tea);


