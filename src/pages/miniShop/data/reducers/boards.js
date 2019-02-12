// export const addWhiteboards = () => {
//   setWhiteboards([...whiteboards, { id: '0001' } /* 此处应该有 id 生成器 */])
// }
// export const addActiveWhiteboardItems = () => {
//   const newWhiteboard = {
//     id: activeWhiteboardID,
//     items: [...activeWhiteboardItems, 1]
//   }
//   const oldWhiteboardIndex = whiteboards.findIndex(
//     ({ id }) => id === activeWhiteboardID
//   )
//   const newWhiteboards = whiteboards.slice()
//   newWhiteboards[oldWhiteboardIndex] = newWhiteboard
//   setWhiteboards(newWhiteboards)
// }

export default (
  state = {
    shelfBoards: [{ id: 'categories-01', name: 'S' }],
    userboards: [{ id: '1111' }]
  },
  action
) => {
  switch (action.type.toUpperCase()) {
    case 'add_userBoard'.toUpperCase(): {
      console.log('should defind reducer for board.js. command: add_userBoard')
    }
    default:
      return state
  }
}
