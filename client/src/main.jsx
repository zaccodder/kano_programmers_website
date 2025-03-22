import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store.js';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <Router future={{ v7_relativeSplatPath: true }}>
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
