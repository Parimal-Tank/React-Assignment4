import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/stores';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Invoice from './view/pages/Invoice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path='Invoice' element={<Invoice />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
