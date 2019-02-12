import { combineReducers } from 'redux'
import app from './app'
import boards from './boards'
import items from './items'

export default combineReducers({ app, boards, items })
