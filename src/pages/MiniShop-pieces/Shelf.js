/**
 * @description this is a container component relay on BasePaper
 */
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import BasePaper from './BasePaper'
import AddItemsButton from './Shelf__AddItemsButton'
import Item from './Shelf__Item'
import ShelfIndicator from './Shelf__Indicator'

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
  state: {
    keys: { currentSymbol },
    collections: { shelfItems }
  },
  setters: {
    collections: { setShelfItems }
  }
}) {
  const classes = useStyles()
  const s = (
    <div className={classes.columnFlexbox}>
      <ShelfIndicator
        state={{
          keys: { currentSymbol }
        }}
      />
      <AddItemsButton
        state={{
          keys: { currentSymbol },
          collections: { shelfItems }
        }}
        setters={{ collections: { setShelfItems } }}
      />
      <div className={classes.goodsGridbox}>
        {shelfItems[currentSymbol].map((item, index) => (
          <Item key={String(index)} />
        ))}
      </div>
    </div>
  )

  return <BasePaper>{s}</BasePaper>
}
