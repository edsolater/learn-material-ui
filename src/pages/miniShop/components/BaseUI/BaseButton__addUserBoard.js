import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

import { addUserBoard } from './buttonHandlers'

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    right: 50,
    bottom: 50
  }
}))

export default () => {
  const classes = useStyles()
  return (
    <Fab
      color="primary"
      aria-label="Add"
      className={classes.fab}
      onDoubleClick={addUserBoard}
    >
      <AddIcon />
    </Fab>
  )
}
