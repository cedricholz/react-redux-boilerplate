import {MAIN_ACTION} from "./constants";
import axios from 'axios';

export const mainAction = (data) => dispatch => (

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(function (response) {
            dispatch({
                type: MAIN_ACTION,
                payload: response,
            })
        })
        .catch(function (error) {
            dispatch({
                type: MAIN_ACTION,
                payload: error,
            })
        })

);
