/**
 * @description this is a container component relay on BasePaper
 */
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import BasePaper from './BasePaper'
import AddItemsButton from './Shelf__AddItemsButton'
import ShelfItem from './Shelf__Item'
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

export default function Shelf({
  stateValue: {
    keys: { currentSymbol },
    computed: { currentShelfItems }
  },
  setters: {
    customed: { addCurrentItems }
  }
}) {
  const classes = useStyles()
  const s = (
    <div className={classes.columnFlexbox}>
      <ShelfIndicator
        stateValue={{
          keys: { currentSymbol }
        }}
      />
      <AddItemsButton setters={{ customed: { addCurrentItems } }} />
      <div className={classes.goodsGridbox}>
        {currentShelfItems.map((item, index) => (
          <ShelfItem key={String(index)} />
        ))}
      </div>
    </div>
  )

  return <BasePaper>{s}</BasePaper>
}
