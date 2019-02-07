/**
 * be imported in ./UserFavorites.js && ./CompareBoard.js && ./UserCustomPaper.js
 */

import React from 'react'
import Draggable from 'react-draggable'
import { makeStyles } from '@material-ui/styles'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    height: 500,
    flex: 1,
    display: 'inline-flex',
    justifyContent: 'center',
    // position: 'absolute',
  },
  boardContent: {
    height: '100%'
  }
}))

export default function BasePaper({ children }) {
  const classes = useStyles()
  return (
    <Draggable>
      <Paper className={classes.root}>{children}</Paper>
    </Draggable>
  )
}
