import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Componente from './Componentes/Componente'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Componente valor="5" habilitado={true} />
  
);

