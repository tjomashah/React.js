import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
// import "tailwindcss/tailwind.css"
import { App } from './app';

import './styles.css';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);