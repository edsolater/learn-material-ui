export default (state = [], action = {}) => {
  switch (action.type.toUpperCase()) {
    case 'no_action'.toUpperCase(): {
      console.log('should defind reducer for board.js. command: add_userBoard')
    }
    default:
      return state
  }
}
