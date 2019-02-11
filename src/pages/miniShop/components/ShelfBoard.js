/**
 * 👌
 * @description this is a container component relay on BaseBoard
 */
import React from 'react'
import { connect } from 'react-redux'

import BaseBoard from './BaseUI/BaseBoard'
import BaseItem from './BaseUI/BaseItem'
import createButton from './BaseUI/createButton'
import { getActiveShelfBoard, getActiveUserBoard } from '../redux/selectors'

const ShelfBoard = ({ items, name, activeUserBoard }) => {
  return (
    <BaseBoard>
      <div>
        {name}
        {createButton('add_item_in_shelf')}
      </div>
      {items.map((item, index) => (
        <BaseItem
          key={String(index)}
          itemInfo={item}
          activeUserBoard={activeUserBoard}
        />
      ))}
    </BaseBoard>
  )
}

const mapStateToProps = ({ boards: { shelfBoards, userBoards } }) => {
  return {
    items: getActiveShelfBoard(shelfBoards).items,
    name: getActiveShelfBoard(shelfBoards).name,
    activeUserBoard: getActiveUserBoard(userBoards)
  }
}

export default connect(mapStateToProps)(ShelfBoard)
