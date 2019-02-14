// reducers are state getters
import { combineReducers } from 'redux'
import shelfBoards from './shelfBoards'
import userBoards from './userBoards'
import menuBoards from './menuBoards'
import items from './items'

export default combineReducers({ shelfBoards, userBoards, menuBoards, items })
