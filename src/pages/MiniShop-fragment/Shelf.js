/**
 * @description this is a container component relay on BaseBoard
 */
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import BaseBoard from './BaseBoard'
import AddButton from './Shelf__AddButton'
import Template from './Shelf__CardTemplate'
import Indicator from './Shelf__Indicator'

const useStyles = makeStyles(theme => ({
  columnFlexbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  goodsGridbox: {}
}))

export function Shelf({
  myProps: {
    collectionKey: {
      object: { currentSymbol }
    },
    original: { shelfCards }
  },
  dispatchers: {
    original: { setShelfCards }
  }
}) {
  const classes = useStyles()
  const s = (
    <div className={classes.columnFlexbox}>
      <Indicator enumState={{ currentSymbol }} />
      <AddButton
        myProps={{
          collectionKey: { object: { currentSymbol } },
          original: { shelfCards }
        }}
        dispatchers={{ original: { setShelfCards } }}
      />
      <div className={classes.goodsGridbox}>
        {shelfCards[currentSymbol].map(cardInfo => (
          <Template />
        ))}
      </div>
    </div>
  )

  return <BaseBoard>{s}</BaseBoard>
}
