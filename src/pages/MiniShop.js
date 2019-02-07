import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  MyAppBar,
  Favorites,
  Categories,
  Shelf,
  CompareBoard,
  UserFavorites,
  UserCustomPaper,
  AddPaperButton
} from './MiniShop-pieces'

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

// container component
export default function MiniShop() {
  const classes = useStyles()
  const [hasShelf, toggleShelf] = React.useToggle(false)
  const [hasUserFavorites, toggleUserFavorites] = React.useToggle(false)
  const [hasFavorites, toggleFavorites] = React.useToggle(false)
  const [allShelfItems, setShelfItems] = React.useState({
    S: [],
    I: [],
    M: [],
    P: [],
    L: [],
    E: []
  })
  const symbols = Object.keys(allShelfItems)
  const [currentSymbol, changeCurrentSymbol] = React.useState(symbols[0])
  let currentShelfItems = allShelfItems[currentSymbol]
  const [userCustomPapers, setUserCustomPapers] = React.useState([1])

  function addUserCustomPapers() {
    window.alert('clicked')
    setUserCustomPapers([...userCustomPapers, 1])
  }
  function addCurrentItems() {
    setShelfItems({
      ...allShelfItems,
      [currentSymbol]: [...allShelfItems[currentSymbol], 1]
    })
  }

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
        stateValue={{ boolean: { hasFavorites } }}
        setters={{ boolean: { toggleFavorites } }}
      />
      <AddPaperButton setters={{ customed: { addUserCustomPapers } }} />
      <Categories
        stateValue={{ collections: { symbols } }}
        setters={{
          boolean: { toggleShelf },
          enum: { changeCurrentSymbol }
        }}
      />
      <div role="flexbox" className={classes.flexbox}>
        <Shelf
          className={classes.shelf}
          stateValue={{
            keys: { currentSymbol },
            collections: { allShelfItems },
            computed: { currentShelfItems }
          }}
          setters={{
            collections: { setShelfItems },
            customed: { addCurrentItems }
          }}
        />
        <div role="spacebox" className={classes['spacebox-in-flexbox']} />
        <CompareBoard className={classes.CompareBoard} />
      </div>
      <UserFavorites stateValue={{ boolean: { hasUserFavorites } }} />
      {userCustomPapers.map((userCustomPape, index) => (
        <UserCustomPaper key={String(index)} />
      ))}
    </>
  )
}
