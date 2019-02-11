import { combineReducers } from 'redux'
import app from './app'
import board from './board'
import item from './item'

export default combineReducers({ app, board, item })
