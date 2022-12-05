import React, { useEffect, useState } from 'react';
import { getPosts } from '../allAPI/apis';
import SubmitPosts from './SubmitPosts';
import PostView from './PostView';




const PostFeed = () => {


    
    const [postPage, setPostPage] = useState({ content: [], last:true })

    useEffect(() => {
        const loadPosts = async () => {
             try {
                const response = await getPosts();
                setPostPage(response.data);
             } catch (error) {
                
             }          
        };
        loadPosts();
    },[]);

    const {content, last } = postPage;

    if(content.length === 0) {
        return <div className='alert alert-secondary text-center'>There are no Posts</div>;
    }


    return (
        <div>
            <h1>Feed</h1>
            {content.map(post => {
                return <PostView key={post.id}  post={post} />;
            })}
            
            {!last && <div className='alert alert-secondary text-center'>Load Other Posts</div>}
        </div>
    );
    
};

export default PostFeed;