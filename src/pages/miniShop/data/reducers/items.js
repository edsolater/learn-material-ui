// function addActiveShelfItems() {
//   const newShelfItem = { id: `${Math.random()}`, location: activeShelfID }
//   const newShelf = { id: activeShelfID, items: [...activeShelfItems, newShelfItem] }
//   const oldShelfIndex = shelves.findIndex(({ id }) => id === activeShelfID)
//   const newShelves = shelves.slice()
//   newShelves[oldShelfIndex] = newShelf
//   setShelves(newShelves)
// }

export default (state = [], action = {}) => {
  console.log('should define reducer in items.js')
  return state
}
