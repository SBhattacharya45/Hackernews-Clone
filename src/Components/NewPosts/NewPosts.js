import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Post from '../Post/Post';
import classes from './NewPosts.module.css';

const NewPosts = () => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        // axios
        // .get("https://hacker-news.firebaseio.com/v0/topstories.json")
        // .then(result => {
        //   setPosts(result.data);
        // })
        // .catch(err => {
        //   alert("Error");
        // });
    }, []);

    return(
        <div className={classes.PostContainer}> 
            <Post/>
            <Post/>
        </div>
    )
}

export default NewPosts;