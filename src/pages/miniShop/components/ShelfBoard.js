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

const ShelfBoard = ({
  addShelfBoardItem,
  activeShelfBoard,
  activeUserBoard
}) => {
  const { name, items = [] } = activeShelfBoard
  const classes = useStyles()
  return (
    <BaseBoard self={activeShelfBoard}>
      <div>
        {name}
        <Button
          variant="outlined"
          color="secondary"
          className={classes.root}
          onClick={addShelfBoardItem}
        >
          <AddIcon />
        </Button>
      </div>
      {(console.log('items in pages: ', items),items.map((item, index) => (
        <BaseItem
          key={String(index)}
          self={item}
          activeUserBoard={activeUserBoard}
        />
      )))}
    </BaseBoard>
  )
}

const mapState = storeState => {
  console.log('current storeState', storeState)
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
