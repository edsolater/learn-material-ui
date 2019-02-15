// 它体现着 UserBoard 与 ShelfBoard 的共性

/**
 * be imported in ./Whiteboard.js && ./Shelf.js
 */
import React from 'react'
import classNames from 'classnames'
import { Rnd } from 'react-rnd'
import { makeStyles } from '@material-ui/styles'
import { Paper } from '@material-ui/core'

// import Board from '../../data/class/Board'
// 需要使用动态import()， 不然会形成动态引用

let Board
import('../../data/class/Board').then(module => (Board = module.default))
const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 0,
    width: '100%', // fulfill <Paper> with <Rnd>
    height: '100%' // fulfill <Paper> with <Rnd>
  }
}))

const BaseBoard = ({
  children,
  className,
  self = (Board && new Board()) || {
    id: 'unassigned',
    name: 'unassigned board'
  },
  active
}) => {
  const classes = useStyles()
  return (
    <Rnd
      default={{
        x: 150,
        y: 205, // 一定要设置这两项，不然没法拖动
        width: 500,
        height: 800
      }}
      bounds="window"
    >
      <Paper className={classNames(classes.root, className)}>{children}</Paper>
    </Rnd>
  )
}

// export default () => (
//   <Rnd
//     default={{
//       width: 500,
//       height: 800
//     }}
//     bounds="window"
//   >
//     <BaseBoard />
//   </Rnd>
// )

export default BaseBoard
