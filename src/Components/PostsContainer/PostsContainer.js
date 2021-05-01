import React, { useState } from 'react';

import NewPosts from '../NewPosts/NewPosts';
import PastPosts from '../PastPosts/PastPosts';
import classes from './PostsContainer.module.css';

const PostsContainer = () => {

    const [mode, setMode] = useState(true);

    const modeChangedHandler = (newMode) => {
        setMode(newMode);
    }

    return(
        <div>
            <div className={classes.modeSelector}>
                <div className={classes.selectorSubDiv}>
                    <span onClick={() => {modeChangedHandler(true)}} className={classes.modes}>New</span>
                    <span onClick={() => {modeChangedHandler(false)}} className={classes.modes}>Past</span>
                </div>
            </div>
            {mode ? <NewPosts/> : <PastPosts/>}
        </div>
    )
}

export default PostsContainer;