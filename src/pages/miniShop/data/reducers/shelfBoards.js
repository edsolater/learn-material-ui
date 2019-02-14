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

const addItemToBoard = ({ newItem, allBoards, activeBoard }) => {
  const oldBoards = allBoards.slice()
  const boardIndex = oldBoards.indexOf(activeBoard)
  const oldBoard = oldBoards[boardIndex]
  oldBoards.splice(
    boardIndex,
    1,
    new Board({ ...oldBoard, items: [...oldBoard.items, newItem] })
  )
  const newBoards = oldBoards
  return newBoards
}

const reducer = (
  state = {
    all: [
      new Board({ type: 'shelfBoard', id: '0000', name: 'S' }),
      new Board({ type: 'shelfBoard', id: '0001', name: 'I' }),
      new Board({ type: 'shelfBoard', id: '0002', name: 'M' }),
      new Board({ type: 'shelfBoard', id: '0003', name: 'P' }),
      new Board({ type: 'shelfBoard', id: '0004', name: 'L' }),
      new Board({ type: 'shelfBoard', id: '0005', name: 'E' })
    ],
    get active() {
      return this.all[0]
    } // 需要动态生成
  },
  action = {}
) => {
  //ToFix: 这个没有触发
  console.log('action.type: ', action.type)
  switch (action.type) {
    case 'add_shelf_board_item': {
      const newItem = action.payload.item
      const allShelfBoards = state.all
      const activeShelfBoard = state.active
      console.log('newItem: ', newItem)
      console.log('allShelfBoards: ', allShelfBoards)
      console.log('activeShelfBoard: ', activeShelfBoard)
      return {
        all: addItemToBoard({
          newItem,
          allBoards: allShelfBoards,
          activeBoard: activeShelfBoard
        }),
        get active() {
          return state.active
        }
      }
    }
    default:
      return state
  }
}

export default reducer