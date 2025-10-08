import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NftApp } from './NftApp.js';
import "./assets/styles/style.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NftApp />
  </StrictMode>,
)