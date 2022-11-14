import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    // flexDirection: 'row',
    backgroundColor: theme.palette.background.default,
    // width: '90%',
    padding: '2%',
    paddingTop: '10%',
    // paddingBottom: '10%',
  },

  title: {  
    fontWeight: 300,
    textAlign: 'center',
    paddingBottom: '5%'
  },

  prod: {  
    display: 'inline-block',
  },

  price: {  
    display: 'inline-block',
    paddingLeft: '500px',
  },

  more: {  
    display: 'inline-block',
    paddingLeft: '220px',
  },

  col1: {  
    display: 'inline-block',
    // paddingLeft: '100px',
  },

  col2: {  
    display: 'inline-block',
    paddingLeft: '50px',
  },

  details: {  
    
    paddingLeft: '5vh',
  },

  summary: {
    flex: 1,
    border: '0.5px solid lightgray',
    borderRadius: '10px',
    padding: '20px',
    marginTop: '40px',
    height: '60vh',
  },

  checkout: {
    width: '25%',
    padding: '10px',
    backgroundColor: 'black',
    color: 'white',
    marginTop: '3%',
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "rgb(40,40,40)",
      
   },

  },


}));