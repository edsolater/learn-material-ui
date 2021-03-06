/**
 * @description this is a container component relay on BaseBoard
 */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import lottie from 'lottie-web'
import styled from 'styled-components'

import BaseBoard from './BaseUI/BaseBoard'
import BaseItem from './BaseUI/BaseItem'
import { addShelfBoardItem } from '../data/actionCreators'
import { getActiveShelfBoard, getActiveUserBoard } from '../data/selectors'

const Wrapper = styled.section``

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
    <Wrapper>
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
          <BaseItem
            key={String(index)}
            self={item}
            activeUserBoard={activeUserBoard}
          />
        ))}
      </BaseBoard>
    </Wrapper>
  )
}

const mapState = state => {
  const { name, items } = getActiveShelfBoard(state.shelfBoards)
  return {
    name,
    items,
    activeUserBoard: getActiveUserBoard(state.userBoards)
  }
}

const mapDispatch = {
  addShelfBoardItem
}

export default connect(
  mapState,
  mapDispatch
)(ShelfBoard)
