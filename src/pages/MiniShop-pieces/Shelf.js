/**
 * @description this is a container component relay on BaseBoard
 */
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import BaseBoard from './BaseBoard'
import ShelfItem from './ShelfItem'
import ShelfItemAddButton from './ShelfItemAddButton'
import ShelfIndicator from './ShelfIndicator'

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
        <ShelfItemAddButton setters={{ customed: { addCurrentShelfItems } }} />
      </div>
      {currentShelfItems.map(({ id }, index) => (
        <ShelfItem key={String(index)} title={id} />
      ))}
    </>
  )

  return <BaseBoard className={classes.columnFlexbox}>{s}</BaseBoard>
}
