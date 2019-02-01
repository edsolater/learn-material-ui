import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Paper } from '@material-ui/core'
import {} from '@material-ui/icons'
import Left from './CompareBoard_left'

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    height: 500
  }
}))

export function CompareBoard({ state: { hasCompareBoard } }) {
  const classes = useStyles()
  return <Paper className={classes.root}>{hasCompareBoard && <Left />}</Paper>
}
