import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Componentes/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App titulo="Hola mundo">Mensaje</App>
  </div>
);

