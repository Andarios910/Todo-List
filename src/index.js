import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import AddTodo from './component/AddTodo';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/add' element={<AddTodo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
