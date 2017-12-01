import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Need to unregister service worker
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux'; //this will become aware of state and store
import store from './store';

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root'));
unregister();
