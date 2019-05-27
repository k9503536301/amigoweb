import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ServiceProvider } from './service-context';
import ErrorBoundry from './components/error-boundry';
import NewsApi from './services/news-api';
import App from './components/app';
import store from './store';

const newsApi = new NewsApi();

ReactDOM.render(
    <Provider store ={store}>
        <ErrorBoundry>
            <ServiceProvider value={newsApi}>
                <Router>
                    <App/>
                </Router>
            </ServiceProvider>
        </ErrorBoundry>
    </Provider>, document.getElementById('root'));

