import React from 'react';

import classes from './Button.module.css';

//  Huh, he makes the type of the button dynamic, so it doesn't have to be a submit like yours.
//  Good bec don't want a form for the error message, just the AddUser.
//  The OR is for if there is no prop.type.
const Button = props => {
    return(
        <button 
            className={classes.button} 
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;