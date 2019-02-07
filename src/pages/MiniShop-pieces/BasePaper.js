/**
 * be imported in ./UserFavorites.js & ./CompareBoard.js
 */

import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    height: 500,
    flex: 1,
    display: 'inline-flex',
    justifyContent: 'center'
  },
  boardContent: {
    height: '100%'
  }
}))

export default function BasePaper({ children }) {
  const classes = useStyles()
  return <Paper className={classes.root}>{children}</Paper>
}
