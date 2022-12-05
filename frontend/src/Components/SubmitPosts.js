import React, { useState, useEffect } from 'react';
import { sharePosts } from '../allAPI/apis';
import { useSelector } from 'react-redux';

const SubmitPosts = () => {
const [focused, setFocused] = useState(false);
const {post, sharePost} = useState('');

useEffect(() => {
    if (!focused) {
      sharePost('');
    }
  }, [focused]);
    
const clikToSharePost = async () => {
    const body = {
        content: post, 
    }
    try {
       await sharePosts(body) 
    } catch (error) {
        
    }



    return (
        
        
    <div className="card p-1 flex-row">

            <div className="flex-fill">
                <textarea
                className="form-control"
                rows={focused ? '3' : '1'}
                onFocus={() => setFocused(true)}
                onChange={event => sharePost(event.target.value)}
                value={post}
                />
                {focused && (
                <div className="text-right mt-1">
                    <button className="btn btn-primary" onClick={clikToSharePost}>
                    Submit Post
                    </button>
                    <button className="btn btn-light d-inline-flex ml-1" onClick={() => setFocused(false)}>
                    <i className="material-icons">close</i>
                    {'Cancel'}
                    </button>
                </div>
                )}
            </div>
    </div>

        
    );
};
}
export default SubmitPosts;