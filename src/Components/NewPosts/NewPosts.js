import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Post from '../Post/Post';
import classes from './NewPosts.module.css';

const NewPosts = () => {

    const [posts, setPosts] = useState([]);
    const [details, setDetails] = useState([]);
    const [loader, setLoader] = useState(true);
    const [list, setList] = useState(null);
    let postsList = null;

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
                posts.slice(0,5).forEach( async id => {
                    const res = await axios.get('https://hacker-news.firebaseio.com/v0/item/'+ id +'.json?print=pretty');
                    console.log(res);
                    newDetails.push(res.data);
                    count++;
                    if(count === 5){
                        console.log("setData");
                        setDetails(newDetails);
                        console.log(details);
                        postsList = details.map((data, igKey) =>{
                            return(
                                <Post key={igKey} title={data.title} link={data.url}/>
                            )
                        })
                        setLoader(false);
                        setList(postsList);  
                    }
                })
            }

            console.log(posts.slice(0, 5));
            console.log("fetched posts");
            setData();
          
        }
    }, [posts])

    // useEffect(() => {
    //     if(details.length > 0){
    //         console.log("details set");
    //         console.log(details);
    //     } else {
    //         console.log("details empty")
    //     }
    // }, [details])



    return(
        <div className={classes.PostContainer}> 
            {/* <Post title="dummy" link="https://www.cdfinder.de/guide/blog/apple_hell.html"/>
            <Post/> */}
            {loader ? "Loading" : null}
            {list}
        </div>
    )
}

export default NewPosts;