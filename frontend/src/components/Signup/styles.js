import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  
      field: {
        width: 350,
        // height: 55,
        // backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        // borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
      },

      // container: {
      //   flex: 1,
      //   justifyContent: 'center',
      //   alignItems: 'center'
      // }

      container: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '10%',
        width: 400,
        height: 420,
        margin: `${theme.spacing(0)} auto`
      },
      subBtn: {
        marginTop: theme.spacing(2),
        flexGrow: 1,
        width: 200,
        height: 30,
        backgroundColor: 'Brown',
        color: '#fff',
      },
      header: {
        textAlign: 'center',
        background: 'Brown',
        color: '#fff',
      },
      card: {
        marginTop: theme.spacing(10),
        
      }


}));