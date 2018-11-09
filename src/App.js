import React, {Component} from 'react';

import './App.css';

import configureStore from './store/store';
import {Provider} from 'react-redux';

import Main from './containers/Main/Main';


class App extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <div className="App">
                    <header className="App-header">
                        <Main/>
                    </header>
                </div>
            </Provider>
        );
    }
}

export default App;



