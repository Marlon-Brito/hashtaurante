import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx';

// Pega toda criação React e joga na estrutura básica ou página principal (index.html)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
