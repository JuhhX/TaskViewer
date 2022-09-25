import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { HeaderBar } from './components/HeaderBar';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  
    <HeaderBar />
    <App />
    
  </React.StrictMode>
)
