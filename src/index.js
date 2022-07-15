import React from 'react';  //берем из библиотеки реакт и используем его
import ReactDOM from 'react-dom/client'; //импортируем для корректной работы html
import './index.scss';
import 'macro-css'; 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

