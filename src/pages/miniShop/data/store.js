import { createStore, applyMiddleware } from 'redux'
import multi from 'redux-multi'
import rootReducer from './reducers'
import { Board, Item } from './class'

const storeMiddlewares = applyMiddleware(multi)

const initialState = {
  shelfBoards: {
    all: [
      new Board({ type: 'shelfBoard', id: '0000', name: 'S' }),
      new Board({ type: 'shelfBoard', id: '0001', name: 'I' }),
      new Board({ type: 'shelfBoard', id: '0002', name: 'M' }),
      new Board({ type: 'shelfBoard', id: '0003', name: 'P' }),
      new Board({ type: 'shelfBoard', id: '0004', name: 'L' }),
      new Board({ type: 'shelfBoard', id: '0005', name: 'E' })
    ],
    activeBoard: null // 需要动态生成
  },
  userBoards: {
    all: [new Board({ name: 'default userBoard' })],
    activeBoard: null // 需要动态生成
  },
  menuBoards: {
    all: [new Board({ type: 'menuBoard', id: 'menu-0000', name: 'shelf-menu' })]
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
