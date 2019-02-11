
function addActiveShelfItems() {
  const newShelfItem = { id: `${Math.random()}`, location: activeShelfID }
  const newShelf = { id: activeShelfID, items: [...activeShelfItems, newShelfItem] }
  const oldShelfIndex = shelves.findIndex(({ id }) => id === activeShelfID)
  const newShelves = shelves.slice()
  newShelves[oldShelfIndex] = newShelf
  setShelves(newShelves)
}
// TODO: items 与 whiteboard 应该有专门的类来描述。这个类有个名为 “copyTO” 的公共方法。
// 以下仅为应急措施
function copyShelfItem({ itemID, targetID }) {
  console.log(itemID, targetID)
}