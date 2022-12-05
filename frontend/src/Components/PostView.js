import React from 'react';

const PostView = (props) => {
    const {post } = props;
    return (
        <div className='card p-1'>
            <a  href={'' + post.contentLink} target="_blank" rel="noreferrer"> 
                 <button >Post Link</button>
                 
            </a>
            
            <br></br>
            {("Content:" + post.contentPost)} 
        </div>
    );
};

export default PostView;