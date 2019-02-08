import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {} from '@material-ui/icons'
import BaseBoard from './BaseBoard'

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    height: 500
  }
}))

export default function Whiteboard({ children }) {
  const classes = useStyles()
  return <BaseBoard>{children}</BaseBoard>
}
