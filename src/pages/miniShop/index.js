import React from 'react'
import './JSClass'
import { Provider } from 'react-redux'

import {
  ShopBar,
  Favorites,
  ShelfBoard,
  UserBoards,
  FlaotingBall
} from './components'
import store from './redux/store'

export default () => {
  const [hasFavorites, toggleFavorites] = React.useToggle(false)
  return (
    <Provider store={store}>
      <ShopBar setters={{ boolean: { toggleFavorites } }} />
      <Favorites
        localState={{ boolean: { hasFavorites } }}
        setters={{ boolean: { toggleFavorites } }}
      />
      <ShelfBoard />
      <UserBoards />
      <FlaotingBall />
    </Provider>
  )
}
