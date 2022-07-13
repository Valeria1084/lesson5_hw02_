import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getPost} from "../../services";

function PostsComponent(props) {
    const {postId}= useParams()
    const [posts,setPost] = useState([])
    useEffect(()=>{
        getPost(postId).then(value => setPost([{...value}]))
    },[postId])

    return (
        <div>
            {
                posts.map(value => <PostsComponent item={value} key={value.id}/> )
            }
        </div>
    );
}

export { PostsComponent};