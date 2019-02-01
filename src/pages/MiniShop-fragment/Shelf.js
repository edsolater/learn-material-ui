import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Paper } from '@material-ui/core'
import {} from '@material-ui/icons'
import S from './Shelf_S'

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    height: 500
  }
}))

export function Shelf({ state: { hasShelf } }) {
  const classes = useStyles()
  return <Paper className={classes.root}>{hasShelf && <S />}</Paper>
}
