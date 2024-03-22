import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WeatherPage from './page/WeatherPage/index';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherPage />
  </React.StrictMode>
);
reportWebVitals();
