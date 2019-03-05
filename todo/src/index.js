import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducers';

import { loadState, saveState } from './localStorage';
import { throttle } from 'lodash';

import Todo from './Todo';

const persistedState = loadState(); 
const store = createStore(reducer, persistedState);

store.subscribe(throttle(() => {
    saveState({
        tasks: store.getState().tasks
    });
}, 1000));

ReactDOM.render(<Provider store={store}><Todo /></Provider>, document.getElementById('root'));


