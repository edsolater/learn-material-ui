// 它体现着 UserBoard 与 ShelfBoard 的共性

/**
 * be imported in ./Whiteboard.js && ./Shelf.js
 */
import React from 'react'
import classNames from 'classnames'
import Draggable from 'react-draggable'
import { makeStyles } from '@material-ui/styles'
import { Paper } from '@material-ui/core'
// import Board from '../../data/class/Board'
// 需要使用动态import()， 不然会形成动态引用

let Board
import('../../data/class/Board').then(module => (Board = module.default))
const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    height: 500,
    flex: 1,
    margin: theme.spacing.gutter,
    padding: theme.spacing.unit
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-start'
  }
}))

export default function({
  children,
  className,
  self = (Board && new Board()) || {
    id: 'unassigned',
    name: 'unassigned board'
  },
  active
}) {
  const classes = useStyles()
  return (
    <Draggable>
      <Paper className={classNames(classes.root, className)}>{children}</Paper>
    </Draggable>
  )
}
