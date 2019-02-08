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
    alignItems: 'center'
  }
}))

export default function Shelf({
  stateValue: {
    keys: { currentShelfID },
    computed: { currentShelfItems }
  },
  setters: {
    customed: { addCurrentShelfItems }
  }
}) {
  const classes = useStyles()
  const s = (
    <>
      <div className={classes.columnFlexbox}>
        <ShelfIndicator
          stateValue={{
            keys: { currentShelfID }
          }}
        />
        <AddItemsButton setters={{ customed: { addCurrentShelfItems } }} />
      </div>
      {currentShelfItems.map((item, index) => (
        <ShelfItem key={String(index)} />
      ))}
    </>
  )

  return <BasePaper className={classes.columnFlexbox}>{s}</BasePaper>
}
