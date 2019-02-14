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
  state = {
    all: [new Board({ name: 'default userBoard' })],
    get active() {
      return this.all[0]
    } // 需要动态生成
  },
  action = {}
) => {
  switch (action.type.toUpperCase()) {
    case 'add_user_board'.toUpperCase(): {
      console.log('state: ', state)
      return {
        all: [...state.all, new Board({ name: 'default userBoard' })],
        get active(){
          return state.active
        }
      }
    }
    default:
      return state
  }
}
