import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    height: 500
  }
}))

export default function BaseBoard({children}) {
  const classes = useStyles()
  return <Paper className={classes.root}>{children}</Paper>
}
