export const addWhiteboards = () => {
  setWhiteboards([...whiteboards, { id: '0001' } /* 此处应该有 id 生成器 */])
}
export const addCurrentWhiteboardItems = () => {
  const newWhiteboard = {
    id: currentWhiteboardID,
    items: [...currentWhiteboardItems, 1]
  }
  const oldWhiteboardIndex = whiteboards.findIndex(({ id }) => id === currentWhiteboardID)
  const newWhiteboards = whiteboards.slice()
  newWhiteboards[oldWhiteboardIndex] = newWhiteboard
  setWhiteboards(newWhiteboards)
}