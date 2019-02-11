import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import { addItemInShelf } from './buttonHandlers'

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.spacing.unit * 12,
    marginBottom: theme.spacing.unit * 2
  }
}))

export default () => {
  const classes = useStyles()
  return (
    <Button
      variant="outlined"
      color="secondary"
      className={classes.root}
      onClick={addItemInShelf}
    >
      <AddIcon />
    </Button>
  )
}
