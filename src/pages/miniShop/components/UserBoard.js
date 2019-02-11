import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {} from '@material-ui/icons'
import BaseBoard from './BaseBoard'
import Item from './BaseItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    height: 500
  }
}))

export default function Whiteboar({ info }) {
  const classes = useStyles()
  const { id: whiteboardID, items } = info
  return (
    <BaseBoard className={classes.columnFlexbox}>
      {items.map(({ itemID, location }, index) => (
        <Item key={String(index)} itemID={itemID} title={itemID} subtitle={location} />
      ))}
    </BaseBoard>
  )
}
