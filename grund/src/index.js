import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
    <Router>
        <ScrollToTop />
        <App />
    </Router>, 
    document.getElementById('root'));

serviceWorker.unregister();
