import React from 'react';
import '../styles/index.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZE = ['btn--normal'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZE[0]

    return (
        <Link to='/account' className='btn-mobile'>
            <button
                className={'btn ${checkButtonStyle} ${checkButtonSize}'}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>

        </Link>
    )
};
