import React, { useState, useEffect } from 'react';
import { sharePosts } from '../allAPI/apis';
import { useSelector } from 'react-redux';

const SubmitPosts = () => {
const [focused, setFocused] = useState(false);
const [post, sharePosting] = useState('');
const [postLink, sharePosting2] = useState();

useEffect(() => {
    if(!focused) {
        sharePosting('')
        sharePosting2('')
    }
}, [focused]);

const onClickSharePost = async () => {
    const body = {
        contentPost: post,
        contentLink: postLink

    }
    try {
       await sharePosts(body);
       setFocused(false)
       
    } catch (error) {
        
    }
}

    return (
        
    <div className='card p-1 flex-row'>

        <div className='flex-fill'>
            
            
            <label>Link</label>
            <textarea type="text" class="form-control" placeholder='Put your link, if you have ' id="basic-url" aria-describedby="basic-addon3" rows={focused ? "3" : "1"} onFocus={() => setFocused(true)} onChange= {event => sharePosting2(event.target.value)} value={postLink}  />
            

            <label >Comment</label>
            <textarea className="form-control" placeholder='Write your feelings here' rows={focused ? "3" : "1"} onFocus={() => setFocused(true)} onChange= {event => sharePosting(event.target.value)} value={post}  />

            {focused && (
            <div className='text-right'>
                <button className='btn btn-primary' onClick={onClickSharePost}>Share</button>
                <button className='btn btn-light d-inline-flex ml-1' onClick={() => setFocused(false) }> <i className='material-icons'>Cancel</i> </button>
            </div>
            )}
        </div>    
    </div>

    


        
    );
};

export default SubmitPosts;