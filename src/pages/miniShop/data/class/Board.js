export default class {
  constructor({ id, type = 'userBoard', name } = {}) {
    this.id = id
    this.type = type
    this.name = name
  }
  cloneSelf(){
    console.log('should clone this board')
  }
}
