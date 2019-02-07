import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  MyAppBar,
  Favorites,
  Categories,
  Shelf,
  CompareBoard,
  UserFavorites
} from './MiniShop-pieces'

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
  ['spacebox-in-flexbox']: {
    width: theme.spacing.gutter
  }
}))

// container component
export default function MiniShop() {
  const classes = useStyles()
  const [hasShelf, toggleShelf] = React.useToggle(false)
  const [hasUserFavorites, toggleUserFavorites] = React.useToggle(false)
  const [hasFavorites, toggleFavorites] = React.useToggle(false)
  const [shelfItems, setShelfItems] = React.useState({
    S: [],
    I: [],
    M: [],
    P: [],
    L: [],
    E: []
  })
  const symbols = Object.keys(shelfItems)
  const [currentSymbol, changeCurrentSymbol] = React.useState(symbols[0])
  const [specialPapers, setSpecialPapers] = React.useState([])
  const [normalPapers, setNormalPapers] = React.useState([])

  return (
    <>
      <MyAppBar
        id="appbar"
        className={classes.appbar}
        appbarPosition="fixed"
        setters={{
          boolean: {
            toggleFavorites,
            toggleUserFavorites
          }
        }}
      />
      <div role="spacebox" className={classes['spacebox-below-appbar']} />
      <Favorites
        state={{ boolean: { hasFavorites } }}
        setters={{ boolean: { toggleFavorites } }}
      />
      <Categories
        state={{ collections: { symbols } }}
        setters={{
          boolean: { toggleShelf },
          enum: { changeCurrentSymbol }
        }}
      />
      <div role="flexbox" className={classes.flexbox}>
        <Shelf
          className={classes.shelf}
          state={{
            keys: { currentSymbol },
            collections: { shelfItems }
          }}
          setters={{
            collections: { setShelfItems }
          }}
        />
        <div role="spacebox" className={classes['spacebox-in-flexbox']} />
        <CompareBoard className={classes.CompareBoard} />
      </div>
      <UserFavorites state={{ boolean: { hasUserFavorites } }} />
    </>
  )
}
