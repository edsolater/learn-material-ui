import { createStore } from 'redux'

import rootReducer from './reducers'
import { Board, Item } from './class'

export default createStore(rootReducer, {
  boards: {
    shelfBoards: [new Board({ id: '0000', name: 'S', items: [] })],
    userBoards: [{ id: '0000', name: 'first one', items: [] }]
  },
  items: [
    new Item({
      id: '0000',
      title: 'first Item',
      subtitle: 'first one'
    })
  ]
})
