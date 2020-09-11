import React from 'react';
import ReactDOM from 'react-dom';
import App from '@src/App';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@src/store/rootReducer";
import { BrowserRouter as Router } from "react-router-dom";

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
