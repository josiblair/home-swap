import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {unregister} from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
unregister();
