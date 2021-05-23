import React from 'react';

import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.Headerdiv}>
            <span className={classes.headerText}><b>Hacker</b> News</span>
        </div>
    )
}

export default Header;