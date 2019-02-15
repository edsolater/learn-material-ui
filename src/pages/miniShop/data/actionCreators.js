// import Item from './class/Item'
import store from './store'

const pickUpItem = () => {
  const allAvailableItems = store.getState().items.all
  return allAvailableItems[0] // 暂且返回可执行的第一个
}

export const changeItemLocation = board => ({
  type: 'change_item_location',
  to: board
})
export const changeActiveBoardIndex = ({ boardType, newIndex }) => {
  switch (boardType) {
    case 'shelfBoard': {
      return {
        type: 'change_active_shelf_board_index',
        payload: { newIndex }
      }
    }
    case 'userBoard': {
      return {
        type: 'change_active_user_board_index',
        payload: { newIndex }
      }
    }
  }
  throw new Error(
    `haven't defined this boardType(${boardType}) in the actionCreator:changeActiveBoardIndex`
  )
}

export const addUserBoard = () => ({ type: 'add_user_board' })

export const addShelfBoardItem = () => {
  return {
    type: 'add_shelf_board_item',
    payload: { item: pickUpItem() }
  }
}
