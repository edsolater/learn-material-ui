import React from 'react'
import ReactDOM from 'react-dom'

import './html-body.css'
import './bootstrap_Material-UI'
import './bootstrap_React'
import './bootstrap_window-DOMRect'

import GlobalTheme from './GlobalTheme'
import MiniShop from './pages/MiniShop'

ReactDOM.render(
  <GlobalTheme>
    <MiniShop />
  </GlobalTheme>,
  document.getElementById('root'),
)
