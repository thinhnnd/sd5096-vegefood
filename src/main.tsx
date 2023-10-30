import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CartProvider } from './context/cart'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
)
