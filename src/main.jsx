import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'
import { ProductProvider } from './context/productContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </ProductProvider>,
)
