import React from 'react';

import classes from './Button.module.css';

const Button = props => {
    return(
        <div className={classes.buttonContainer}>
            <button className={classes.button} onClick={props.click}>Load More</button>
        </div>
    )
}

export default Button;