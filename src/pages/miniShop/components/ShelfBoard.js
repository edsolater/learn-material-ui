/**
 * @description this is a container component relay on BaseBoard
 */
import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import BaseBoard from './BaseUI/BaseBoard'
import BaseItem from './BaseUI/BaseItem'
import { addShelfBoardItem } from '../data/actionCreators'
import { getActiveShelfBoard, getActiveUserBoard } from '../data/selectors'

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.spacing.unit * 12,
    marginBottom: theme.spacing.unit * 2
  }
}))

const ShelfBoard = ({ activeShelfBoard, activeUserBoard }) => {
  const { name, items = [] } = activeShelfBoard
  console.log(activeShelfBoard)
  const classes = useStyles()
  return (
    <BaseBoard shelf={activeShelfBoard}>
      <div>
        {name}
        <Button
          variant="outlined"
          color="secondary"
          className={classes.root}
          onClick={() => (console.log('clicked'), addShelfBoardItem())}
        >
          <AddIcon />
        </Button>
      </div>
      {items.map(
        (item, index) => (
          console.log(item),
          (
            <BaseItem
              key={String(index)}
              self={item}
              activeUserBoard={activeUserBoard}
            />
          )
        )
      )}
    </BaseBoard>
  )
}

const mapState = storeState => {
  return {
    activeShelfBoard: getActiveShelfBoard(storeState.shelfBoards),
    activeUserBoard: getActiveUserBoard(storeState.userBoards)
  }
}

const mapDispatch = {
  addShelfBoardItem
}

export default connect(
  mapState,
  mapDispatch
)(ShelfBoard)
