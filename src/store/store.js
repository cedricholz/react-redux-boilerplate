import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import mainReducers from '../containers/Main/reducers';

export default function configureStore(initialState = {}) {
    return createStore(
        combineReducers({
            mainReducers,
        }),
        applyMiddleware(thunk)
    );
}
