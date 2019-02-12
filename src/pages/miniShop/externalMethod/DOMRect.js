function rect_in(another) {
  return (
    this.left > another.left &&
    this.top > another.top &&
    this.right < another.right &&
    this.bottom < another.bottom
  )
}
function rect_intersect(another) {
  return (
    ((another.left > this.left && this.left < another.right) ||
      (another.left > this.right && this.right < another.right)) &&
    ((another.top > this.top && this.top < another.bottom) ||
      (another.top > this.bottom && this.bottom < another.bottom))
  )
}
function rect_on(another) {
  return this.rect_intersect(another) && !this.rect_intersect(another)
}
// function bool_diff(bool1, bool2) {
//   return bool1 + bool2 === 1
// }

window.DOMRect.prototype.in = rect_in
window.DOMRect.prototype.intersect = rect_intersect
window.DOMRect.prototype.on = rect_on
