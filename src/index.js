import React from 'react';
import ReactDOM from 'react-dom/client';
// Di chuyển file index.css vào thừ mục Css, mà thư mục Css nằm trong thư mục Components 
import './css/index.css';
// Di chuyển file App.js vào thư mục Components, nên ta chỉ lại đường dẫn 
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
