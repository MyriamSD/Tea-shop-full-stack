import React from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Box } from '@material-ui/core';

const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];

// const columns = [
//     { field: 'id', headerName: 'ID' },
//     { field: 'title', headerName: 'Title', width: 300 },
//     { field: 'body', headerName: 'Body', width: 600 }
//   ]
  
  const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];

const Inventory = (props) => {
  return (
    <>
    <Box>
      <img src={props.image} alt={props.name} width='10%'/>
  


    </Box>
   
    </>
  )
}

export default Inventory