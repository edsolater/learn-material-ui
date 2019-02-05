import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  MyAppBar,
  Favorites,
  Categories,
  Shelf,
  CompareBoard,
  UserCart
} from './MiniShop-fragment'

const useStyles = makeStyles(theme => ({
  ['spacebox-below-appbar']: {
    // 需要获取appbar的高度，动态地设定值
    height: theme.spacing.unit * 10
  },
  flexbox: {
    display: 'flex',
    position: 'relative',
    width: '100%'
  },
  shelf: {
    flex: '1' //这个没有下沉到根元素，实际上是没有显示效果的
  },
  ['spacebox-in-flexbox']: {
    width: theme.spacing.gutter
  },
  CompareBoard: {
    flex: '1' //这个没有下沉到根元素，实际上是没有显示效果的
  }
}))

// container component
export default function MiniShop() {
  const classes = useStyles()
  const [hasShelf, toggleShelf] = React.useToggle(false)
  const [hasUserCart, toggleUserCart] = React.useToggle(false)
  const [hasFavorites, toggleFavorites] = React.useToggle(false)
  const [shelfCards, setShelfCards] = React.useState({
    S: [],
    I: [],
    M: [],
    P: [],
    L: [],
    E: []
  })
  const symbols = Object.keys(shelfCards)
  const [currentSymbol, changeCurrentSymbol] = React.useState(symbols[0])

  return (
    <>
      <MyAppBar
        id="appbar"
        className={classes.appbar}
        appbarPosition="fixed"
        dispatchers={{
          boolean: {
            toggleFavorites,
            toggleUserCart
          }
        }}
      />
      <div role="spacebox" className={classes['spacebox-below-appbar']} />
      <Favorites
        myProps={{ boolean: { hasFavorites } }}
        dispatchers={{ boolean: { toggleFavorites } }}
      />
      <Categories
        myProps={{ computed: { symbols } }}
        dispatchers={{
          boolean: { toggleShelf },
          enum: { changeCurrentSymbol }
        }}
      />
      <div role="flexbox" className={classes.flexbox}>
        <Shelf
          className={classes.shelf}
          myProps={{
            collectionKey: { object: { currentSymbol } },
            original: { shelfCards }
          }}
          dispatchers={{ original: { setShelfCards } }}
        />
        <div role="spacebox" className={classes['spacebox-in-flexbox']} />
        <CompareBoard className={classes.CompareBoard} />
      </div>
      <UserCart myProps={{ boolean: { hasUserCart } }} />
    </>
  )
}
