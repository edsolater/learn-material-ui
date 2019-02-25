import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

import { addUserBoard } from '../data/actionCreators'

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    right: 50,
    bottom: 50
  }
}))

const FloatingBall = ({ addUserBoard }) => {
  const classes = useStyles()
  return (
    <Fab
      color="primary"
      aria-label="Add"
      className={classes.fab}
      onClick={addUserBoard}
    >
      <AddIcon />
    </Fab>
  )
}

const mapDispatch = {
  addUserBoard
}

export default connect(
  null,
  mapDispatch
)(FloatingBall)
