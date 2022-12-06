import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Grid} from '@material-ui/core';
import Tea from './Tea/Tea';
import useStyles from './styles'
import axios from 'axios'
// import { setData } from '../../Redux/Shopping/shopping-actions';
// import { useDispatch, useSelector } from 'react-redux';

// import { connect } from "react-redux";


// const getData = () => {
//   const products = useSelector((state) => state);
//   const dispatch = useDispatch();

//   const getProducts = async () => {
//     const response = await axios.get('http://localhost:5000/').then((response) => {
//       dispatch(setData(response.data));
//       })    
//   }

//   return(dispatch) => {
//       return axios.get('http://localhost:5000/').then((response) => {
//           dispatch(setData(response.data));
//           })    
//   }

// }

// const products = [
//     {id: 1 , name: 'Black Tea', description: '30g of our Classic black tea; a hand blended mix of whole leaf black tea that is certain to delight all of your senses', price: '15.99', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/IMG_4804_590x.jpg?v=1633806435' },
//     {id: 1, name: 'Rose Black Tea', description: '25g of Rose Black which combines loose leaf black tea with smooth notes of rose and a bright finish.', price: '25.99', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/ROSE_BLACK_800x.jpg?v=1633472682' },
//     {id: 1, name: 'Rose Black Tea', description: '25g of a cozy autumnal black tea blend with inviting notes of spicy, sweet, and pumpkin-tinged flavors.', price: '25.99', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/PUMPKIN_SPICE_CHAI_ee336e1a-42d5-4e05-9800-518726c27250_600x.jpg?v=1630345125' },
//     {id: 1, name: 'Green Tea', description: '30g of Fresh green tea leaves that are crafted by a gentle steam and dry technique to maximize the vivid fresh taste.', price: '15.99', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/IMG_4865_356ff9c4-dd36-4c07-b8d3-37018f16765d_295x.jpg?v=1634418464'},
//     {id: 1, name: 'Green Cleanse', description: '25g of loose leaf green tea with citrus, berry, and spicy notes combined in ayurvedic tea of bliss', price: '25.99', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/CLEANSE_800x.jpg?v=1582760796'},
//     {id: 1, name: 'Morroccan Mint Green', description: '25g of Organic Morroccan peppermint and spearmint, hand-blended with organic green tea', price: '25.99', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/20200312_ArtofTea__AudreyMa_0301_Web_600x.jpg?v=1585430384'},
//     {id: 1, name: 'White Tea', description: '30g of Organic loose leaf White tea with a smooth and savory comforting aroma.', price: '18.00', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/IMG_4184_1772x.jpg?v=1632189483'},
//     {id: 1, name: 'White Tea and Peony vanillé', description: '25g of Organic white tea is handpicked and tossed with fresh peonys', price: '25.99', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/WHITE_PEONY_800x.jpg?v=1582495009'},
//     {id: 1, name: 'Oolong Tea', description: '30g of long, beautiful Oolong leaves create a smooth, rich flavor. 60-80% oxidized for a deep golden hue with a slightly peppery finish.', price: '22.50', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/IMG_4787_1200x.jpg?v=1633804161'},
//     {id: 1, name: 'Oolong Pineapple Medley', description: '25g We bring together notes of lychee and citrus with organic lemongrass and sweet pineapple for a truly unforgettable cup of Oolong tea', price: '30.00', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/20210711_ArtofTea__AudreyMa_0069_800x.jpg?v=1626114566'},
//     {id: 1, name: 'Peach Oolong Tea', description: '30g of a rich woodsy Oolong with notes of ripened peaches and a sweet honey finish.', price: '20.50', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/12_00PM_365eb92e-c3c6-49d3-b5be-c5f6b07e0fb0_800x.jpg?v=1623182545'},
//     {id: 1, name: 'Matcha', description: '35g of Organic grade A matcha that provides a rich, complex taste and a boost of calm energy for the day. ', price: '20.00', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/MATCHA_GRADE_A_800x.jpg?v=1582421040'},
// ]
 


const Products = (props) => {

  const products =useSelector((state) => state.products.products)

  // const products = useSelector((state) => state);
  // const dispatch = useDispatch();

  // const getProducts = async () => {
  //   const response = await axios.get('http://localhost:5000/').then((response) => {
      

  //   })    
  //     dispatch(setData(response.data));  
  // }

  // useEffect(() => {
  //       getProducts()                                      
  //   }, [])
  

  
    
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
        {/* <h1>HEllo World!</h1> */}
        </main>

    )};

    // const mapStateToProps = (state) => {
    //     return {
    //       products: state.shop.products,
    //     };
    //   };
      
      export default Products;
    





// const Products = ({ products, onAdd }) => {
//     const classes = useStyles();

//     return (

//         <main className={classes.content}>
//         <div className={classes.toolbar}/>
//         <Grid container justify='center' spacing={4}>
//             {products.map((product) => (
//                 <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
//                 <Tea product={product} onAdd={onAdd} />
//                 </Grid>
//             ))}
//         </Grid>
//         </main>

//     )};

// const mapStateToProps = (state) => {
//     return (
//         products: state.shop.products;
//     )
// }
// export default connect (mapStateToProps) (Products);