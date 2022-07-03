import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroesApp } from './HeroesApp';
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>
);
