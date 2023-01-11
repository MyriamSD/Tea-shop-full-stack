import React from 'react'
import useStyles from './styles';
import { Card, CardActions, CardHeader, CardContent, Typography, Paper} from '@material-ui/core';
import { gridClasses } from '@mui/x-data-grid';

const EditProducts = () => {
  const classes = useStyles()
  return (
    <Card className={classes.container}>
      <form>
        <div>
          <label for="name">product name:</label>
          <input
                type="text"
                value='name'
                placeholder="Name"
                // onChange={(e) => setName(e.target.value)}
              />
        </div>
      </form>
    </Card>
    
  )
}

export default EditProducts