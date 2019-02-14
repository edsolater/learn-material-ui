import store from '../store'

export default class Board {
  constructor({
    id = Date.now(),
    type = ['userBoard', 'shelfBoard'][0],
    name = 'unnamed',
    items = []
  } = {}) {
    this.id = id
    this.type = type
    this.name = name
    this.items = items
    this._store = store
    Board.addInstance(this)
  }
  static instances = []
  static addInstance(newInstance) {
    Board.instances.push(newInstance)
  }
  cloneSelf() {
    console.log('should clone this board')
  }
}
window.Board = Board
