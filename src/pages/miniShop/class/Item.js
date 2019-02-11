import store from '../redux/store'
import { changeItemLocation } from '../redux/actionCreators'
window.Item = class {
  constructor({ id, location, title, subtitle }) {
    this.id = id
    this.location = location
    this.title = title
    this.subtitle = subtitle
    this._store = store
  }
  copyTo(board) {
    this._store.dispatch(changeItemLocation(board))
  }
}
