// // shelves infos
// const [shelves, setShelves] = React.useState([
//   { id: 'S', items: [] },
//   { id: 'I', items: [] },
//   { id: 'M', items: [] },
//   { id: 'P', items: [] },
//   { id: 'L', items: [] },
//   { id: 'E', items: [] }
// ])
// const shelfIDs = shelves.map(shelf => shelf.id)
// const [activeShelfID, setActiveShelfID] = React.useState(shelfIDs[0])

// // whiteboards infos
// const [whiteboards, setWhiteboards] = React.useState([
//   { id: '0000', items: [{ id: `${Math.random()}`, location: 'from S' }] },
//   { id: '0001', items: [] }
// ])
// const whiteboardIDs = whiteboards.map(whiteboard => whiteboard.id)
// const [activeWhiteboardID, setActiveWhiteboardID] = React.useState(whiteboardIDs[0])

// // component handlers

// function addActiveShelfItems() {
//   const newShelfItem = { id: `${Math.random()}`, location: activeShelfID }
//   const newShelf = { id: activeShelfID, items: [...activeShelfItems, newShelfItem] }
//   const oldShelfIndex = shelves.findIndex(({ id }) => id === activeShelfID)
//   const newShelves = shelves.slice()
//   newShelves[oldShelfIndex] = newShelf
//   setShelves(newShelves)
// }
// TODO: items 与 whiteboard 应该有专门的类来描述。这个类有个名为 “copyTO” 的公共方法。
// 以下仅为应急措施
import Board from '../class/Board'

const addItemToBoard = ({ newItem, allBoards, activeBoardIndex }) => {
  const oldBoards = allBoards.slice()
  const oldBoard = oldBoards[activeBoardIndex]
  oldBoards.splice(
    activeBoardIndex,
    1,
    new Board({ ...oldBoard, items: [...oldBoard.items, newItem] })
  )
  const newBoards = oldBoards
  return newBoards
}

export default (/*state*/ shelfBoards = {}, action = {}) => {
  switch (action.type) {
    case 'add_shelf_board_item': {
      const newShelfBoards = addItemToBoard({
        newItem: action.payload.item,
        allBoards: shelfBoards.all,
        activeBoardIndex: shelfBoards.activeBoardIndex
      })
      return {
        ...shelfBoards,
        all: newShelfBoards
      }
    }
    case 'change_active_shelf_board_index': {
      return {
        ...shelfBoards,
        activeBoardIndex: action.payload.newIndex
      }
    }
    default:
      return shelfBoards
  }
}
