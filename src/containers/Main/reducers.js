import {MAIN_ACTION} from './constants';

let defaultState = {
    mainProp: 'NOT CLICKED',
};

const mainReducers = (state = defaultState, action) => {

    switch (action.type) {
        case MAIN_ACTION:
            return {
                ...state,
                mainProp: action.payload
            };
        default:
            return state;
    }
};

export default mainReducers;
