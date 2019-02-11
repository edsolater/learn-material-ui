/**
 * @description this is a container component relay on BaseBoard
 */
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import BaseBoard from './BaseBoard'
import Item from './BaseItem'
import ShelfItemAddButton from './ShelfItemAddButton'
import ShelfIndicator from './ShelfIndicator'

const useStyles = makeStyles(theme => ({
  columnFlexbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 2
  }
}))

export default function Shelf({
  stateValue: {
    keys: { currentShelfID },
    computed: { currentShelfItems }
  },
  setters: {
    customed: { addCurrentShelfItems, copyShelfItem }
  }
}) {
  const classes = useStyles()

  return (
    <BaseBoard className={classes.columnFlexbox}>
      <div className={classes.columnFlexbox}>
        <ShelfIndicator
          stateValue={{
            keys: { currentShelfID }
          }}
        />
        <ShelfItemAddButton setters={{ customed: { addCurrentShelfItems } }} />
      </div>
      {currentShelfItems.map(({ id, location }, index) => (
        <Item
          key={String(index)}
          setters={{ copyShelfItem }}
          itemID={id}
          title={id}
          subtitle={location}
        />
      ))}
    </BaseBoard>
  )
}
