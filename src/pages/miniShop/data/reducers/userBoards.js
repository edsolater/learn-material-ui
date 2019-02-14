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
import Board from '../class/Board'
export default (
  userBoards = {
    all: [new Board({ name: 'default userBoard' })],
    activeBoardIndex: 0
  },
  action = {}
) => {
  switch (action.type) {
    case 'add_user_board': {
      return {
        ...userBoards,
        all: [...userBoards.all, new Board({ name: 'default userBoard' })]
      }
    }
    default:
      return userBoards
  }
}
