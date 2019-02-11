// 它体现着 whiteboard 与 shelfBoard 的共性


/**
 * be imported in ./Whiteboard.js && ./Shelf.js
 */
import React from 'react'
import classNames from 'classnames'
import Draggable from 'react-draggable'
import { makeStyles } from '@material-ui/styles'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    height: 500,
    flex: 1,
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-start'
  }
}))

export default function BaseBoard({ children, className }) {
  const classes = useStyles()
  return (
    <Draggable>
      <Paper className={classNames(classes.root, className)}>{children}</Paper>
    </Draggable>
  )
}
