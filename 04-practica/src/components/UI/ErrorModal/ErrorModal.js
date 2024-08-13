import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import './ErrorModal.css';

const ErrorModal = (props) => {
    return (
        <div>
            <div className='backdrop' onClick={props.onConfirm}></div>
            <Card className="modal">
                <header className='header'>
                    <h2>{props.title}</h2>
                </header>
                <div className='content'>
                    <p>{props.message}</p>
                </div>
                <footer className='actions'>
                    <Button onClick={props.onConfirm}>OK</Button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;