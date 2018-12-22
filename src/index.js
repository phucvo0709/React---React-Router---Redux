import React from 'react';
import ReactDOM from 'react-dom';
// auth
    // import setAuthToken from './utils/setAuthToken';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
// router
import { Router } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
//reducer
import errorReducer from './store/reducers/errorReducer';
import successReducer from './store/reducers/successReducer';
import facebookReducer from './store/reducers/facebookReducer';
//plugins
import moment from 'moment';
import Moment from 'react-moment';
import createHistory from 'history/createBrowserHistory'
// 
import App from './components/App';
import * as serviceWorker from './serviceWorker';
const history = createHistory()

// Sets the moment instance to use.
Moment.globalMoment = moment;
Moment.globalLocale = 'vi';

// redux tools extension google
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// root reducer
const rootReducer = combineReducers({
    errors: errorReducer,
    success: successReducer,
    facebook: facebookReducer
})
// create store redux 
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
//app
const app = (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
