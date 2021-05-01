import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Post from '../Post/Post';
import Button from '../Button/Button';
import classes from './PastPosts.module.css';

const PastPosts = () => {

    const [posts, setPosts] = useState([]);
    const [details, setDetails] = useState([]);
    const [loader, setLoader] = useState(true);
    const [list, setList] = useState(null);
    const [offset, setOffset] = useState(0);
    let postsList = null;
    const post_count = 5;

    useEffect( () => {

        const fetchData = async () => {
            console.log("fetching posts");
            const result = await axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
            setPosts(result.data);
        }

        fetchData();

    //   const res = await axios.get('https://hacker-news.firebaseio.com/v0/item/26993857.json?print=pretty');
    //   console.log(res);
        // let newDetails = details;
        // let count = 0;
        // posts.slice(0, 5).forEach(async post => {
        //     const res = await axios.get('https://hacker-news.firebaseio.com/v0/item/26993857.json?print=pretty');
        //     console.log(res);
        //     newDetails.push(res);
        //     count++;
        //     if(count === 5){
        //         console.log("ok");
        //         setFlag(true);
        //         setDetails(newDetails);
        //     }
        // })
    }, []);

    useEffect( () => {
        if(posts.length > 0){

            const setData = async () => {
                let newDetails = details;
                let count = 0;
                posts.slice(0,post_count).forEach( async id => {
                    const res = await axios.get('https://hacker-news.firebaseio.com/v0/item/'+ id +'.json?print=pretty');
                    // console.log(res);
                    newDetails.push(res.data);
                    count++;
                    if(count === post_count){
                        // console.log("setData");
                        setDetails(newDetails);
                        // console.log(details);
                        postsList = details.map((data, igKey) =>{
                            return(
                                <Post key={igKey} title={data.title} link={data.url}/>
                            )
                        })
                        setLoader(false);
                        setList(postsList);
                        setOffset(post_count);  
                    }
                })
            }

            // console.log(posts.slice(0, post_count));
            // console.log("fetched posts");
            setData();
          
        }
    }, [posts])

    const onLoadHandler = async () => {
        // console.log("setLoader");
        const container = document.querySelector('#postContainer')
        setLoader(true);
        let newList = list;
        let newDetails = [];
        let count = 0;
        console.log(newList);
        console.log("set count to zero");
        posts.slice(offset,(post_count + offset)).forEach( async id => {
            const res = await axios.get('https://hacker-news.firebaseio.com/v0/item/'+ id +'.json?print=pretty');
            console.log(res);
            newDetails.push(res.data);
            count++;
            if(count === post_count){
                console.log("setData");
                setDetails(newDetails);
                console.log(details);
                newDetails.map((data, igKey) =>{
                    const ele = <Post key={igKey} title={data.title} link={data.url}/>
                    newList.push(ele);
                    // return(
                    //     <Post key={igKey} title={data.title} link={data.url}/>
                    // )
                })
                console.log(newList);
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