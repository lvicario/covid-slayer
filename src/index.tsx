import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import rootReducer from "./store/rootReducer";

const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
