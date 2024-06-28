import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div className=' md:max-w-sm md:mx-auto md:shadow-xl'>
            <App />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
