import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import { createStore } from './Store.js';

const actionDispatcher = (state = { albums: []}, action) => {
    switch(action.action) {
        case 'SEARCH':
            console.log('in here');
            return {
                albums : [{
                    "images" : [ {
                        "height" : 640,
                        "url" : "https://i.scdn.co/image/51f2cd051c02133c0ba5fa4a64cd8a0d34c3665a",
                        "width" : 640
                    }, {
                        "height" : 300,
                        "url" : "https://i.scdn.co/image/a965014ebb046baeb421cc6ad53d3792f295d0bc",
                        "width" : 300
                    }, {
                        "height" : 64,
                        "url" : "https://i.scdn.co/image/63813c23f0bfbec8cff982bb469446cd81450bda",
                        "width" : 64
                    } ],
                    "name" : "Queen Of The Clouds (Blueprint Edition)"
                }, {
                    "images" : [ {
                        "height" : 640,
                        "url" : "https://i.scdn.co/image/a17df796c83359e90ff722ff3d065ee00411ed74",
                        "width" : 640
                    }, {
                        "height" : 300,
                        "url" : "https://i.scdn.co/image/b6623a0484f816287545b398f56f2e6faa1121f7",
                        "width" : 300
                    }, {
                        "height" : 64,
                        "url" : "https://i.scdn.co/image/007bbf39c71fc34d34f039a8ded35c0829dafd97",
                        "width" : 64
                    } ],
                    "name" : "A Night At The Opera (Deluxe Remastered Version)"
                }, {
                    "images" : [ {
                        "height" : 640,
                        "url" : "https://i.scdn.co/image/f7d9bf1aaa5d0d76da8dc98fbc1a1b85f5cec334",
                        "width" : 640
                    }, {
                        "height" : 300,
                        "url" : "https://i.scdn.co/image/36f6f8627a30740907c53390f7a7b77c49ede6da",
                        "width" : 300
                    }, {
                        "height" : 64,
                        "url" : "https://i.scdn.co/image/6110f3cfc08370a72c16f649916b0171cab87410",
                        "width" : 64
                    } ],
                    "name" : "Christine And The Queens"
                    }]
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

