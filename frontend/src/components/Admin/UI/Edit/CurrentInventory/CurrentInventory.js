import React from 'react'
import { Box, Typography } from '@material-ui/core';

const CurrentInventory = (props) => {
  return (
    <>
    <Box>
        <Typography>{props.name}</Typography>
        <div>{props.qty}</div>
        <button>edit</button>
    </Box>
   
    </>
  )
}

export default CurrentInventory