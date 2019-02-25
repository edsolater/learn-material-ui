import { ClickAwayListener } from '@material-ui/core'
import { cloneElement } from 'react'

// selectors are state getter
//const activeShelfItems = shelves.find(shelf => shelf.id === activeShelfID).items

// TODO: use the same param: state
export const getAllUserBoards = (userBoards = {}) => Array.from(userBoards.all) || []

export const getAllShelfBoards = (shelfBoards = {}) => Array.from(shelfBoards.all) || []

export const getActiveUserBoard = (userBoards = {}) => userBoards.active || {}

export const getActiveShelfBoard = (shelfBoards = {}) => shelfBoards.active || {}

export const getShelfBoardNames = (shelfBoards = {}) =>
  Array.from(shelfBoards.all, (shelfBoard = {}) => shelfBoard.name)
