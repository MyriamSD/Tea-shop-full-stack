import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        width: '100%',
        lineHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',       
      },

      edge: { 
        display: 'inline',  
      },

      row: {
        paddingLeft: '230px',
      },

      col: {
        display: 'inline',      
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
      },

      price: {
        display: 'inline',
        paddingLeft: '30px',
      },

      total: {
        display: 'inline',
        paddingLeft: '30px',
      },


}));