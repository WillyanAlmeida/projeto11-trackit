import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './GlobalStyles.js'
import ResetStyle from './ResetStyle.js'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
