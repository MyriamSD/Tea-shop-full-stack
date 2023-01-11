import React from 'react'
import {Grid, Paper, Typography, } from '@material-ui/core';
import useStyles from './styles.js';

const Overview = () => {
  const classes = useStyles()
  return (
    <>
    <Grid ontainer justify='center' className={classes.content}>
        {/* <Typography variant="h2" component="h2">
            Overview
        </Typography> */}
        <h2>Overview</h2>
    </Grid>
    </>
  )
}

export default Overview