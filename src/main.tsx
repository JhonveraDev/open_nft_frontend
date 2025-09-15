import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NftApp } from './NftApp.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NftApp />
  </StrictMode>,
)