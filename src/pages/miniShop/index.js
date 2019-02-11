import React from 'react'
import './JSClass'
import { Provider } from 'react-redux'

import { ShopBar, Favorites, ShelfBoard, UserBoards } from './components'
import store from './redux/store'


const App = () => {
  const classes = useStyles()
  return (
    <Provider store={store}>
      <ShopBar />
      <Favorites />
      <ShelfBoard />
      <UserBoards />
    </Provider>
  )
}

