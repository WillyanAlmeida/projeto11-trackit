import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './GlobalStyle.js'
import ResetStyle from './ResetStyle.js'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
