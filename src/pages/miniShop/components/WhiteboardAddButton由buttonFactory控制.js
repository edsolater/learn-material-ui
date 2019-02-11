import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

// direct styles in Home Page
const useStyles = makeStyles(theme => ({
  root: {
    // layout itself
    width: theme.spacing.unit * 12,
    marginBottom: theme.spacing.unit * 2
  }
}))

// 0 links
export default function WhiteboardAddButton({
  setters: {
    customed: { addWhiteboards }
  }
}) {
  const classes = useStyles()
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.root}
      onClick={addWhiteboards}
    >
      <AddIcon />
    </Button>
  )
}
