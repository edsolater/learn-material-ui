import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {} from '@material-ui/icons'
import DetailCard from './CompareBoard_DetailCard'
import BaseBoard from './BaseBoard'

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    height: 500
  }
}))

export function CompareBoard() {
  const classes = useStyles()
  return <BaseBoard><DetailCard /></BaseBoard>
}