import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './App';
import Catalog from './screens/Catalog/Catalog';
import Language from './screens/Language/Language';

import * as serviceWorker from './serviceWorker';

/**
 * Prepare Routing
 */
const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/language" component={Language} /> 
                <Route path="/catalog" component={Catalog} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
