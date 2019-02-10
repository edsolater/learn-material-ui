import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  MyAppBar,
  Favorites,
  Categories,
  Shelf,
  WhiteboardAddButton,
  Whiteboard
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
  // JSS style object
  const classes = useStyles()

  // pieces togglers
  const [hasFavorites, toggleFavorites] = React.useToggle(false)

  // shelves infos
  const [shelves, setShelves] = React.useState([
    { id: 'S', items: [] },
    { id: 'I', items: [] },
    { id: 'M', items: [] },
    { id: 'P', items: [] },
    { id: 'L', items: [] },
    { id: 'E', items: [] }
  ])
  const shelfIDs = shelves.map(shelf => shelf.id)
  const [currentShelfID, setCurrentShelfID] = React.useState(shelfIDs[0])
  const currentShelfItems = shelves.find(shelf => shelf.id === currentShelfID).items

  // whiteboards infos
  const [whiteboards, setWhiteboards] = React.useState([
    { id: '0000', items: [{ id: `${Math.random()}`, location: 'whiteboard0000' }] },
    { id: '0001', items: [] }
  ])
  const whiteboardIDs = whiteboards.map(whiteboard => whiteboard.id)
  const [currentWhiteboardID, setCurrentWhiteboardID] = React.useState(whiteboardIDs[0])
  const currentWhiteboardItems = whiteboards.find(
    whiteboard => whiteboard.id === currentWhiteboardID
  ).items

  // component handlers
  function addWhiteboards() {
    setWhiteboards([...whiteboards, { id: '0001' } /* 此处应该有 id 生成器 */])
  }
  function addCurrentWhiteboardItems() {
    const newWhiteboard = {
      id: currentWhiteboardID,
      items: [...currentWhiteboardItems, 1]
    }
    const oldWhiteboardIndex = whiteboards.findIndex(({ id }) => id === currentWhiteboardID)
    const newWhiteboards = whiteboards.slice()
    newWhiteboards[oldWhiteboardIndex] = newWhiteboard
    setWhiteboards(newWhiteboards)
  }
  function addCurrentShelfItems() {
    const newShelfItem = { id: `${Math.random()}`, location: currentShelfID }
    const newShelf = { id: currentShelfID, items: [...currentShelfItems, newShelfItem] }
    const oldShelfIndex = shelves.findIndex(({ id }) => id === currentShelfID)
    const newShelves = shelves.slice()
    newShelves[oldShelfIndex] = newShelf
    setShelves(newShelves)
  }
  // TODO: items 与 whiteboard 应该有专门的类来描述。这个类有个名为 “copyTO” 的公共方法。
  // 以下仅为应急措施
  function copyShelfItem({ itemID, targetID }) {
    console.log(itemID, targetID)
  }

  // root component
  return (
    <>
      <MyAppBar
        id="appbar"
        className={classes.appbar}
        appbarPosition="fixed"
        setters={{
          boolean: {
            toggleFavorites
          }
        }}
      />
      <div label="spacebox" className={classes['spacebox-below-appbar']} />
      <Favorites
        stateValue={{ boolean: { hasFavorites } }}
        setters={{ boolean: { toggleFavorites } }}
      />
      <WhiteboardAddButton setters={{ customed: { addWhiteboards } }} />
      <Categories
        stateValue={{ collections: { shelfIDs } }}
        setters={{
          enum: { setCurrentShelfID }
        }}
      />
      <div label="flexbox" className={classes.flexbox}>
        <Shelf
          className={classes.shelf}
          stateValue={{
            keys: { currentShelfID, currentWhiteboardID },
            collections: { shelves },
            computed: { currentShelfItems }
          }}
          setters={{
            collections: { setShelves },
            customed: { addCurrentShelfItems, copyShelfItem }
          }}
        />
        <div role="spacebox" className={classes['spacebox-in-flexbox']} />
        {whiteboards.map((whiteboard, index) => (
          <Whiteboard key={String(index)} info={whiteboard} />
        ))}
      </div>
    </>
  )
}
