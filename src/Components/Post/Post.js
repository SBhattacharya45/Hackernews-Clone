import React from 'react';
import TimeAgo from 'react-timeago'
import ReactTimeAgo from 'react-time-ago'

import classes from './Post.module.css';

const Post = props => {

    return(
        <a className={classes.mainContainer} rel="noreferrer nofollow" target="_blank" href={props.link} style={{ textDecoration: 'none' }}>
            <div className={classes.head}>
                <p>{props.title}</p>
            </div>
            <div className={classes.sub}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, leo eu lobortis viverra, libero ex efficitur odio, a cursus dolor ligula at mi. Nullam condimentum porta fermentum</p>
            </div>
            <div className={classes.meta}>
                <TimeAgo date={props.time * 1000}/> | 56 Comments
            </div>
        </a>
    )
}

export default Post;