import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

//  This component is in the same file as ErrorModal bec it will only be used w it.
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = props => {
    return (         
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    );
};

//  For ReactDom.createPortal(), 1st param is the JSX element, 2nd is where in the HTML u put it.
const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay 
                    title={props.title} 
                    message={props.message} 
                    onConfirm={props.onConfirm} 
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};

export default ErrorModal;