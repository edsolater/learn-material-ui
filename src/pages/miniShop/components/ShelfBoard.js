/**
 * @description this is a container component relay on BaseBoard
 */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import lottie from 'lottie-web'

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

const ShelfBoard = ({ name, items, activeUserBoard, addShelfBoardItem }) => {
  const classes = useStyles()
  useEffect(() => {
    var container = document.getElementById('lottie')
    var rectMoving = lottie.loadAnimation({
      wrapper: container,
      animType: 'svg',
      path: 'data.json'
    })
    return () => {
      rectMoving.destroy()
    }
  })

  return (
    <BaseBoard>
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
      <div id="lottie" />
      {items.map((item, index) => (
        <BaseItem key={String(index)} self={item} activeUserBoard={activeUserBoard} />
      ))}
    </BaseBoard>
  )
}

const mapState = storeState => {
  const { name, items } = getActiveShelfBoard(storeState.shelfBoards)
  return {
    name,
    items,
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
