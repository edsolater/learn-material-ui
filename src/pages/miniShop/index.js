import React from 'react'
import './externalMethod'
import { Provider } from 'react-redux'

import { ShopBar, Favorites, ShelfBoard, UserBoards, FloatingBall } from './components'
import store from './data/store'
import MiniShopTheme from './config/material-ui-theme'

console.log('hello')
export default () => {
  const [hasFavorites, toggleFavorites] = React.useToggle(false)
  return (
    <Provider store={store}>
      <MiniShopTheme>
        <ShopBar setters={{ boolean: { toggleFavorites } }} />
        <Favorites
          localState={{ boolean: { hasFavorites } }}
          setters={{ boolean: { toggleFavorites } }}
        />
        <ShelfBoard />
        <UserBoards />
        <FloatingBall />
      </MiniShopTheme>
    </Provider>
  )
}
