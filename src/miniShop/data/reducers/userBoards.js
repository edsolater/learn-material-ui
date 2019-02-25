import Board from '../class/Board'
export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'add_user_board': {
      const { all } = state
      const { length } = all
      return {
        ...state,
        all: {
          ...all,
          [length]: new Board({ name: 'default userBoard' }),
          length: length + 1
        }
      }
    }
    case 'change_active_user_board_index': {
      return {
        ...state,
        activeBoardIndex: action.payload.newId
      }
    }
    default:
      return state
  }
}
