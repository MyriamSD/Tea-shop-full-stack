import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/cart-slice'
import { AddShoppingCart }from '@material-ui/icons'
import useStyles from './styles'


const Tea = (props) => {
  const {name, description, image, price, id} = props;
    const classes = useStyles();
    const dispatch = useDispatch();
  

    const addItemHandler = () => {
      dispatch(cartActions.addItem({
        id,
        name,
        description,
        image,
        price
      }))
    }

    
    return (
        <Card className={classes.root} style={{height: '450px'}}>
      <CardMedia className={classes.media} image={props.image} title={props.name} />
      <CardContent style={{height: '150px'}}>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${props.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary" component="p">{props.description} </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart"  onClick={addItemHandler}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
    )
}

export default Tea;


