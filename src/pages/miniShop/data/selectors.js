import { ClickAwayListener } from "@material-ui/core";
import { cloneElement } from "react";

// selectors are state getter
//const activeShelfItems = shelves.find(shelf => shelf.id === activeShelfID).items
export const getAllUserBoards = (userBoards = {}) => userBoards.all || []

export const getAllShelfBoards = (shelfBoards = {}) => shelfBoards.all || []

export const getActiveUserBoard = (userBoards = {}) =>
  userBoards.all[userBoards.activeBoardIndex] || {}

export const getActiveShelfBoard = (shelfBoards = {}) =>
  shelfBoards.all[shelfBoards.activeBoardIndex] || {}

export const getShelfBoardNames = (shelfBoards = {}) =>
  getAllShelfBoards(shelfBoards).map((shelfBoard = {}) => shelfBoard.name)
