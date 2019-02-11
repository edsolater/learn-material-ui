import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Provider } from 'react-redux'

import { ShopBar, Favorites, ShelfBoard, UserBoards } from './components'
import store from './redux/store'

const useStyles = makeStyles(theme => ({
  'spacebox-below-appbar': {
    // 需要获取appbar的 DOM 的高度，动态地设定值
    height: theme.spacing.unit * 10
  },
  flexbox: {
    display: 'flex',
    position: 'relative',
    width: '100%'
  },
  'spacebox-in-flexbox': {
    width: theme.spacing.gutter
  }
}))

export default () => {
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
