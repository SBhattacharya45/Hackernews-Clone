import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Post from '../Post/Post';
import Button from '../Button/Button';
import classes from './PastPosts.module.css';

const PastPosts = () => {

    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(true);
    const [list, setList] = useState(null);
    const [offset, setOffset] = useState(0);
    const post_count = 5;

    useEffect( () => {

        const fetchData = async () => {
            const result = await axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
            setPosts(result.data);
        }

        fetchData();
    }, []);

    useEffect( () => {
        if(posts.length > 0){

            const setData = async () => {
                let newDetails = [];
                let count = 0;
                let postsList = null;
                posts.slice(0,post_count).forEach( async id => {
                    const res = await axios.get('https://hacker-news.firebaseio.com/v0/item/'+ id +'.json?print=pretty');
                    newDetails.push(res.data);
                    count++;
                    if(count === post_count){
                        postsList = newDetails.map((data, igKey) =>{
                            return(
                                <Post key={igKey} time={data.time} title={data.title} link={data.url}/>
                            )
                        })
                        setLoader(false);
                        setList(postsList);
                        setOffset(post_count);  
                    }
                })
            }

            setData();
          
        }
    }, [posts])

    const onLoadHandler = async () => {
        const container = document.querySelector('#postContainer')
        setLoader(true);
        let newList = list;
        let newDetails = [];
        let count = 0;
        posts.slice(offset,(post_count + offset)).forEach( async id => {
            const res = await axios.get('https://hacker-news.firebaseio.com/v0/item/'+ id +'.json?print=pretty');
            newDetails.push(res.data);
            count++;
            if(count === post_count){
                newDetails.map((data, igKey) =>{
                    const ele = <Post key={igKey + offset} time={data.time} title={data.title} link={data.url}/>
                    newList.push(ele);
                    return true;
                })
                setLoader(false);
                setList([...newList]);
                setOffset(post_count + offset);
                container.scrollBy(0, 80);  
            }
        })
    }


    return(
        <div className={classes.container}>
            <div id="postContainer" className={classes.PostContainer}> 
                {/* <Post title="dummy" link="https://www.cdfinder.de/guide/blog/apple_hell.html"/> */}
                {list}
                {loader ? "Loading..." : null}
            </div>
            <Button load={loader} click={onLoadHandler}/>
        </div>
    )
}

export default PastPosts;