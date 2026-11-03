import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/Card_Context.jsx'
import Support_message from './components/Support_message.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
    <Support_message/>
  </CartProvider>,
)
