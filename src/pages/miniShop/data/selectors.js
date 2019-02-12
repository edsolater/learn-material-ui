//const activeShelfItems = shelves.find(shelf => shelf.id === activeShelfID).items

export const getActiveUserBoard = userBoards =>
  userBoards.find(userBoard => userBoard.active)

export const getShelfBoardNames = shelfBoards =>
  shelfBoards.map(shelfBoard => shelfBoard.name)

export const getActiveShelfBoard = shelfBoards =>
  shelfBoards.find(shelfBoard => shelfBoard.active)
