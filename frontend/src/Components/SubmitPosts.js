import React, { useState, useEffect } from 'react';
import { sharePosts } from '../allAPI/apis';
import { useSelector } from 'react-redux';

const SubmitPosts = () => {
const [focused, setFocused] = useState(false);
const [post, sharePosting] = useState('');
const [postLink, sharePosting2] = useState('');
const [title, sharePosting3] = useState('');
const [label, sharePosting4] = useState('');

useEffect(() => {
    if(!focused) {
        sharePosting('')
        sharePosting2('')
        sharePosting3('')
        sharePosting4('')
    }
}, [focused]);

const onClickSharePost = async () => {
    const body = {
        contentTitle: title,
        contentLabel: label,
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
        
    <div className='card p-1 flex-row border border-success'>

        <div className='flex-fill border border-success'>
            
            <h1>Share Posts</h1>
            <label>Title</label>
            <textarea  type="text" className="form-control border border-info rounded" placeholder='Write your title here ' id="basic-url" aria-describedby="basic-addon3" rows={focused ? "3" : "1"} onFocus={() => setFocused(true)} onChange= {event => sharePosting3(event.target.value)} value={title}  />

            <label>Link</label>
            <textarea type="text" className="form-control border border-primary" placeholder='Put your link, if you have ' id="basic-url" aria-describedby="basic-addon3" rows={focused ? "3" : "1"} onFocus={() => setFocused(true)} onChange= {event => sharePosting2(event.target.value)} value={postLink}  />
            

            <label >Comment</label>
            <textarea className="form-control border border-warning" placeholder='Write your feelings here' rows={focused ? "3" : "1"} onFocus={() => setFocused(true)} onChange= {event => sharePosting(event.target.value)} value={post}  />

            <label>Label</label>
            <textarea type="text" className="form-control border border-success" placeholder='Write your post label ' id="basic-url" aria-describedby="basic-addon3" rows={focused ? "3" : "1"} onFocus={() => setFocused(true)} onChange= {event => sharePosting4(event.target.value)} value={label}  />

            {focused && (
            <div className='text-right mb'>
                <button className='btn btn-primary' onClick={onClickSharePost}>Share</button>
                <button className='btn btn-light d-inline-flex ml-1' onClick={() => setFocused(false) }> <i className='material-icons'>Cancel</i> </button>
            </div>
            )}
        </div>    
    </div>

    


        
    );
};

export default SubmitPosts;