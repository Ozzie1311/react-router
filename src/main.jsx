import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'
import { makeServer } from '../server'

if (process.env.NODE_ENV === 'development') {
  console.log('🚀 Initializing MirageJS server...')
  makeServer() // <-- Llama a la función para iniciar el servidor
}

createRoot(document.getElementById('root')).render(<App />)
