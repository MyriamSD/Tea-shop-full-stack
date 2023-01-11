import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { adminLoginActions } from '../../store/admin-login-slice';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Typography } from '@material-ui/core';
import Dashboard from './UI/Dashboard/Dashboard';
import AdminNav from './UI/AdminNav/AdminNav';
import Overview from './UI/Overview/Overview';
import useStyles from './styles.js';
import AdminDrawer from './UI/Drawer/AdminDrawer';
import Preview from './UI/Preview/Preview';
import EditProducts from './UI/Edit/EditProducts';





const Admin = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const adminIsAuth = useSelector((state) => state.adminAuth.adminIsAuth)

  let handleAdminLogout = async () => { 
    dispatch(adminLoginActions.authenticateAdmin())
  }

  return (
    <Router>
      <div className={classes.container}>
      
      <AdminDrawer className={classes.drawer}/>
      <AdminNav />
      <Switch>
        <Route exact path="/admin">
          <Typography variant="h2" component="h2" justify='center' className={classes.title}>Welcome Admin</Typography>
          <Overview />
          <Dashboard />
        </Route>


        <Route exact path="/admin/store-preview">
              <Preview />
        </Route>

        <Route exact path="/admin/edit-products">
              <EditProducts />
        </Route>

      </Switch>
 
      
      
  
    </div>

    </Router>
  )
}

export default Admin
