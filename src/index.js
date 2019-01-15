import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import CounterReducer from './store/reducers/counter';
import ResultReducer from './store/reducers/result';

/*merging reducers*/
const reducer=combineReducers({
    ctr:CounterReducer,
    res:ResultReducer});

const store=createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
