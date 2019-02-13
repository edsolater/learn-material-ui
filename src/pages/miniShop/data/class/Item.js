import store from '../store'
import { changeItemLocation } from '../actionCreators'
export default class Item {
  constructor({
    id = Date.now(),
    location = 'getActiveShelfBoard(store.getState().boards)',
    title = 'NO title',
    subtitle = 'NO subtitle'
  }) {
    this.id = id
    this.location = location
    this.title = title
    this.subtitle = subtitle
    this._store = store
    Item.addInstance(this)
  }
  static instances = []
  static addInstance(newInstance) {
    Item.instances.push(newInstance)
  }
  copyTo(board) {
    this._store.dispatch(changeItemLocation(board))
  }
}
