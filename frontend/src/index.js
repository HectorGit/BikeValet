import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {store as customerStore} from './redux/customerStore'
import { fetchCustomers } from './redux/customerReducer';

//dispatch the fetchProducts() before our root component renders
customerStore.dispatch(fetchCustomers())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);