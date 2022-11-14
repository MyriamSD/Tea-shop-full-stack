import * as actionTypes from "./shopping-types";
import Data from "../../Data";

const { products } = Data;

const INITIAL_STATE = {
    products: [
        {id: 1, name: 'Black Tea', description: '30g of our Classic black tea; a hand blended mix of whole leaf black tea that is certain to delight all of your senses', price: '15.99', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/IMG_4804_590x.jpg?v=1633806435' },
        {id: 2, name: 'Rose Black Tea', description: '25g of Rose Black which combines loose leaf black tea with smooth notes of rose and a bright finish.', price: '25.99', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/ROSE_BLACK_800x.jpg?v=1633472682' },
        {id: 3, name: 'Pumpkin Spice Black Tea', description: '25g of a cozy autumnal black tea blend with inviting notes of spicy, sweet, and pumpkin-tinged flavors.', price: '25.99', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/PUMPKIN_SPICE_CHAI_ee336e1a-42d5-4e05-9800-518726c27250_600x.jpg?v=1630345125' },
        {id: 4, name: 'Green Tea', description: '30g of Fresh green tea leaves that are crafted by a gentle steam and dry technique to maximize the vivid fresh taste.', price: '15.99', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/IMG_4865_356ff9c4-dd36-4c07-b8d3-37018f16765d_295x.jpg?v=1634418464'},
        {id: 5, name: 'Green Cleanse', description: '25g of loose leaf green tea with citrus, berry, and spicy notes combined in ayurvedic tea of bliss', price: '25.99', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/CLEANSE_800x.jpg?v=1582760796'},
        {id: 6, name: 'Morroccan Mint Green', description: '25g of Organic Morroccan peppermint and spearmint, hand-blended with organic green tea', price: '25.99', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/20200312_ArtofTea__AudreyMa_0301_Web_600x.jpg?v=1585430384'},
        {id: 7, name: 'White Tea', description: '30g of Organic loose leaf White tea with a smooth and savory comforting aroma.', price: '18.00', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/IMG_4184_1772x.jpg?v=1632189483'},
        {id: 8, name: 'White Tea and Peony vanillé', description: '25g of Organic white tea is handpicked and tossed with fresh peonys', price: '25.99', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/WHITE_PEONY_800x.jpg?v=1582495009'},
        {id: 9, name: 'Oolong Tea', description: '30g of long, beautiful Oolong leaves create a smooth, rich flavor. 60-80% oxidized for a deep golden hue with a slightly peppery finish.', price: '22.50', image: 'https://cdn.shopify.com/s/files/1/0696/9261/products/IMG_4787_1200x.jpg?v=1633804161'},
        {id: 10, name: 'Oolong Pineapple Medley', description: '25g We bring together notes of lychee and citrus with organic lemongrass and sweet pineapple for a truly unforgettable cup of Oolong tea', price: '30.00', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/20210711_ArtofTea__AudreyMa_0069_800x.jpg?v=1626114566'},
        {id: 11, name: 'Peach Oolong Tea', description: '30g of a rich woodsy Oolong with notes of ripened peaches and a sweet honey finish.', price: '20.50', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/12_00PM_365eb92e-c3c6-49d3-b5be-c5f6b07e0fb0_800x.jpg?v=1623182545'},
        {id: 12, name: 'Matcha', description: '35g of Organic grade A matcha that provides a rich, complex taste and a boost of calm energy for the day. ', price: '20.00', image: 'https://cdn.shopify.com/s/files/1/0311/4398/5197/products/MATCHA_GRADE_A_800x.jpg?v=1582421040'},
    ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
     
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
     
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };


      
    case actionTypes.REMOVE_ONE_FROM_CART:


      
      return {
        ...state,
        cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item),
      };

    case actionTypes.REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };

      


    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;





// products: [
//     {
//       id: 1,
//       title: "This is the COOLEST Cube Ever",
//       description:
//         "This cube will keep you busy the entire day and it is very fun to play with",
//       price: 15.0,
//       image:
//         "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     },
//     {
//       id: 2,
//       title: "Large Coffee Cup",
//       description:
//         "Get a big cup of coffee every morning before the day starts",
//       price: 20.0,
//       image:
//         "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//     },
//     {
//       id: 3,
//       title: "Books That CHANGED My Life",
//       description:
//         "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
//       price: 150.0,
//       image:
//         "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
//     },
//   ],