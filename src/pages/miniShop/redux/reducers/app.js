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

// whiteboards infos
const [whiteboards, setWhiteboards] = React.useState([
  { id: '0000', items: [{ id: `${Math.random()}`, location: 'from S' }] },
  { id: '0001', items: [] }
])
const whiteboardIDs = whiteboards.map(whiteboard => whiteboard.id)
const [currentWhiteboardID, setCurrentWhiteboardID] = React.useState(whiteboardIDs[0])

// component handlers

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
