import React from 'react'

React.useToggle=(boolState) => {
  const [state,setState] = React.useState(boolState)
  const switchBool = bool => !Boolean(bool)
  const toggleState = () => setState(switchBool(state))
  return [state, toggleState]
}