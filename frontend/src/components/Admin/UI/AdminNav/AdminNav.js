import React from "react";
import { useDispatch } from "react-redux";
import {AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core';
import { adminLoginActions } from "../../../../store/admin-login-slice";
import { Link} from 'react-router-dom'
import adminLogo from '../../../../assets/admin-logo.webp'
import useStyles from './styles.js';

const AdminNav = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  let handleAdminLogout = async () => { 
    dispatch(adminLoginActions.authenticateAdmin())
  }

  return (
    <>
    <AppBar position='fixed' color="inherit" className={classes.adminAppBar}>
      
      <Typography component={Link} to='/admin' variant='h6' className={classes.title} color='inherit'>
        <img src={adminLogo} alt='admin logo' height='25px' className={classes.image}/>
          Admin
      </Typography>

      <Typography component={Link} to='/admin' onClick={handleAdminLogout} variant='caption' className={classes.logOut} color='inherit'>
        logout  
      </Typography>

    </AppBar>
        
    </>
  )
}

export default AdminNav