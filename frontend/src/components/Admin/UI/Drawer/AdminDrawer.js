import React from 'react'
import { Drawer, Box, Typography } from '@material-ui/core'

import { Link} from 'react-router-dom'
import previewLogo from '../../../../assets/logo4.jpg'
import dashLogo from '../../../../assets/dash.webp'
import productsLogo from '../../../../assets/products.png'
import useStyles from './styles.js';
import Preview from '../Preview/Preview';

const AdminDrawer = () => {
  const classes = useStyles()
  return (
    <>
    <Drawer variant="permanent"  amchor='left'>
      <Box p={2} textAlign='center' role='presentation' component={Link} to='/admin'>
        <Typography variant='h6' component='div' >Main</Typography>
        <img src={dashLogo} alt='admin logo' height='25px' className={classes.image}/>
      </Box>
      <Box p={2} textAlign='center' role='presentation' component={Link} to='/admin/store-preview'>
        <Typography variant='h6' component='div' >Store Preview</Typography>
        <img src={previewLogo} alt='admin logo' height='25px' className={classes.image}/>

      </Box>
      <Box p={2} textAlign='center' role='presentation' component={Link} to='/admin/edit-products'>
        <Typography variant='h6' component='div' >My Products</Typography>
        <img src={productsLogo} alt='admin logo' height='25px' className={classes.image}/>

      </Box>


    </Drawer>
    </>
  )
}

export default AdminDrawer