import React, {useState} from 'react'
import useStyles from './AddProductStyles';
import { useSelector, typography } from 'react-redux'
import { Card, CardActions, CardHeader, CardContent, Typography, Paper, Grid, Box} from '@material-ui/core';
import { gridClasses } from '@mui/x-data-grid';

const AddProduct = () => {
    const classes = useStyles()
    // const newProduct = useSelector((state) => state.products.newProduct)

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [qty, setQty] = useState('');

    const sendRequest = async (e) => {
        e.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/', {
            method: "POST",
            body:
            {
                "name": name,
                "price": price,
                "description": description,
                "imageUrl": imageUrl,
                "qty": qty,
    
            }
            });

            console.log(price, qty, description, name, imageUrl)
      let resJson = await response.json();
      if (response.status === 200) {
        setName("");
        setDescription("");
        setPrice("");
        setImageUrl("");
        setQty(null);
        console.log("success")
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
        



        
    
    
    

  return (
    <Card className={classes.formcard}>
        {/* <button>Create a new product</button> */}
        <form onSubmit={sendRequest}>
            <div>
            <label for="name">product name:</label>
            <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
            <label for="description">product description:</label>
            <input
                    type="text"
                    value={description}
                    placeholder="..."
                    onChange={(e) => setDescription(e.target.value)}
                />

            <label for="price">product price:</label>
            <input
                    type="text"
                    value={price}
                    placeholder="5.99"
                    onChange={(e) => setPrice(e.target.value)}
                />
            <label for="imageUrl">product image:</label>
            <input
                    type="text"
                    value={imageUrl}
                    placeholder="url..."
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            <label for="qty">Quantity:</label>
            <input
                    type="number"
                    value={qty}
                    placeholder="qty"
                    onChange={(e) => setQty(e.target.value)}
                />
                
            </div>
            <button type='submit'>Create Product</button>
        </form>

     </Card>
  )
}
export default AddProduct