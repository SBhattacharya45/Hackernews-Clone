import React from 'react';
import logo from '../../Assets/logo_top.png';

import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.Headerdiv}>
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Header;