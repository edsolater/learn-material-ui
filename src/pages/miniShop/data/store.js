import { createStore, applyMiddleware } from 'redux'
import multi from 'redux-multi'
import rootReducer from './reducers'
import { Board, Item } from './class'

const storeMiddlewares = applyMiddleware(multi)

const initialState = {
  shelfBoards: {
    all: [new Board({ type: 'shelfBoard', id: '0000', name: 'S' })],
    activeBoard: null // 需要动态生成
  },
  userBoards: {
    all: [new Board({ name: 'default userBoard' })],
    activeBoard: null // 需要动态生成
  },
  items: {
    all: [
      new Item({
        id: '0000',
        title: 'first Item',
        subtitle: 'first one'
      })
    ]
  }
}

export default createStore(rootReducer, initialState, storeMiddlewares)
