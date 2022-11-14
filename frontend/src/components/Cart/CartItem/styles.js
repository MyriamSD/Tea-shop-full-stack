import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        // maxWidth: 345, original width style
        width: '100%',
        lineHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
        
      },

      edge: {
        // maxWidth: 345, original width style
        
        display: 'inline',
       
        
        
      },

      row: {
        paddingLeft: '230px',
        

      },

      col: {
        // maxWidth: 345, original width style
        // padding: '1%',
        display: 'inline',
        // paddingLeft: '30px',
        // position: 'relative',
        // right: '10px',
        
       
        
        
      },

      media: {
        height: '100px',
        width: '250px',
        objectFit: 'cover',
        border: '1px solid black',
        
      },

      name: {
        display: 'inline-block',
        maxWidth: '230px',
        paddingLeft: '5%',
        
        verticalAlign: 'middle',
        minWidth: '230px',
        // border: '1px solid black',
        // paddingBottom: '15%',
        // top: 0,
        
      },

      price: {
        display: 'inline',
        paddingLeft: '30px',
        // paddingRight: '30px',
      },

      total: {
        display: 'inline',
        paddingLeft: '30px',
        // paddingRight: '30px',
      },

      // wrapper: {
      //   padding: '20px',
      //   // paddingRight: '30px',
      // },

      // product: {
      //   flex: 3,
      //   justifyContent: 'space-between',
      //   jus
      // }

      

     
    
        
      
      // cardActions: {
      //   display: 'flex',
      //   justifyContent: 'flex-end',
      // },
      
}));