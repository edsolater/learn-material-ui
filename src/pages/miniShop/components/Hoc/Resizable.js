// it's a high-order component
import React from 'react'

function Resizable(Component){
  const [size, setSize] = React.useState({
    width: 300,
    height: 300
  })
  const [hasMouseDown, changeMouseDown] = React.useState(false)
  const checkOnBounding = e => {
    // Temp: temporary always reflect mouse change
    changeMouseDown(true)
  }
  const moveDiv = e => {
    if (hasMouseDown) {
      setSize({ width: e.pageX, height: e.pageY })
    } else {
      return
    }
  }
  return (
    <Comopnent
      aria-label="ResizableDiv"
      style={{ border: '1px dark gray', ...size }}
      onMouseDown={checkOnBounding}
      onMouseMove={moveDiv}
      onMouseUp={() => changeMouseDown(false)}
    >
      {children || <span>haven't customed React component template yet</span>}
    </Comopnent>
  )
}

export default Resizable
