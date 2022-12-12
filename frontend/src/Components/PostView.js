import React from 'react';
import LikeButton from './LikeButton';

const PostView = (props) => {
    const {post } = props;
    return (
        <div className='card p-1 border border-success mb-1'>
            
            <div>
                <b>Title:</b>  {post.contentTitle}
            </div>

            <div>
                <a  href={'' + post.contentLink} target="_blank" rel="noreferrer"> 
                    <button >Post Link</button>
                    
                </a>
            </div>
           
            <div>
                <b>Content:</b>  {post.contentPost}
            </div>
            
            
            <div>
                <b>Label:</b>  {post.contentLabel}
            </div>
            
            
            <LikeButton/>
         
        </div>
    );
};

export default PostView;