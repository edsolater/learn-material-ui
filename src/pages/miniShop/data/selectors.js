// selectors are state getter
//const activeShelfItems = shelves.find(shelf => shelf.id === activeShelfID).items
export const getAllUserBoards = (userBoards = {}) => userBoards.all || []

export const getAllShelfBoards = (shelfBoards = {}) => shelfBoards.all || []

export const getActiveUserBoard = (userBoards = {}) => userBoards.active || {}

export const getActiveShelfBoard = (shelfBoards = {}) => shelfBoards.active || {}

export const getShelfBoardNames = (shelfBoards = {}) =>
  getAllShelfBoards(shelfBoards).map((shelfBoard = {}) => shelfBoard.name)
