import Board from '../class/Board'
export default (
  userBoards = {
    all: { 0: new Board({ name: 'default userBoard' }) },
    active: {}
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
    case 'change_active_user_board_index': {
      return {
        ...userBoards,
        activeBoardIndex: action.payload.newId
      }
    }
    default:
      return userBoards
  }
}
