import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

// direct styles in Home Page
const useStyles = makeStyles(theme => ({
  root: {
    width: theme.spacing.unit * 12,
    marginBottom: theme.spacing.unit * 2
  }
}))

// 0 links
export default function addButton({
  state: {
    collectionKey: {
      object: { currentSymbol }
    },
    original: { shelfCards }
  },
  setters: {
    original: { setShelfCards }
  }
}) {
  const classes = useStyles()
  function add(e) {
    console.log(e)
    setShelfCards({
      ...shelfCards,
      [currentSymbol]: [...shelfCards[currentSymbol], 1]
    })
  }
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.root}
      onClick={add}
    >
      <AddIcon />
    </Button>
  )
}
