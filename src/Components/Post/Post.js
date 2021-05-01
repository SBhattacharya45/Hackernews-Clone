import React from 'react';

import classes from './Post.module.css';

const Post = props => {

    const clickHandler = () => {
        // window.location.href= props.link;

    }

    return(
        <a className={classes.mainContainer} target="_blank" href={props.link} style={{ textDecoration: 'none' }}>
            <div className={classes.head}>
                <p>{props.title}</p>
            </div>
            <div className={classes.sub}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, leo eu lobortis viverra, libero ex efficitur odio, a cursus dolor ligula at mi. Nullam condimentum porta fermentum</p>
            </div>
            <div className={classes.meta}>
                1 day ago | 56 Comments
            </div>
        </a>
    )
}

export default Post;