import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import { createStore } from './Store.js';

const getAsync = function(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
};

const actionDispatcher = (state = { albums: []}, action) => {
    switch(action.action) {
        case 'SEARCH':
            getAsync('https://api.spotify.com/v1/search?q=' + action.query + '&type=album', action.callback);
            return state;
        case 'SET_RESULTS':
            return {
                albums: action.albums
            };
        default:
            return state;
    }
};

const store = createStore(actionDispatcher);

const render = () => {
    ReactDOM.render(<App store={store}/>,
        document.getElementById('app'));
};

store.subscribe(render);

//First dispatch to get a rendered application
store.dispatch({});

