/**
 * @description this is a container component relay on BaseBoard
 */
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {} from '@material-ui/icons'
import BaseBoard from "./BaseBoard";
import S from './Shelf_S'

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    height: 500
  }
}))

export function Shelf({ state: { hasShelf } }) {
  const classes = useStyles()
  return <BaseBoard>{hasShelf && <S />}</BaseBoard>
}
