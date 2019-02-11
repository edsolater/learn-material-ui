window.Board = class {
  constructor({ id, type = 'userBoard', name } = {}) {
    this.id = id
    this.type = type
    this.name = name
  }
}
