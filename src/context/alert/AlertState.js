import React, {useReducer} from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const AlertState = props => {
    const initialState = null;

    // Call an Action -> Do the request -> get a response  Dispatch the request
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // Set Alert
    const setAlert = (msg, type) => {
      dispatch({
        type: SET_ALERT,
        payload: { msg, type}
      })
      
      setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
    }
    // Remove Alert

    //below takes value (its a prop) which we want to be available to entire app
    //props.children will show all inner html here, since Provider will be used as wrapper.
    return <AlertContext.Provider
        value = {{
            alert: state,
            setAlert
        }}
    ch>
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;