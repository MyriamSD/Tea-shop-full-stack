import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 20;

export default makeStyles((theme) => ({
    adminAppBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        // height: '10%',
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}%)`,
          marginLeft: drawerWidth,
        },
      },

      image: {
        width: '10%',
        height: '20%',
        marginRight: '10px',
      },

      title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
        fontFamily: "PlayItalic",
      },

      logOut: {
        flexGrow: 1,
        textAlign: 'center',
        marginLeft: '50%',
        "&:hover": {
          border: "1px solid grey",
          
       },
       
      },
}))