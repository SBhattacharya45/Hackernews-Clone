import React from 'react';
import logo from '../../Assets/logo_bottom.png';

import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.Footerdiv}>
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Footer;