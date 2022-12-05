import React from 'react';
import { useSelector } from 'react-redux';
import PostFeed from '../Components/PostFeed';
import SubmitPosts from '../Components/SubmitPosts';
import TopBar from '../Components/TopBar';
import LoginPage from './LoginPage';



const HomePage = () => {
    
    const { userLoggedIn} = useSelector(store => ({userLoggedIn: store.userLoggedIn}))

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    
                    {userLoggedIn === true && 
                    ( <SubmitPosts/> )}


                    
                </div>
                <div className='col'>
                  
                    {userLoggedIn === true && 
                    ( <PostFeed/> )} 
  
                </div>

            </div>
        </div>
    );
};

export default HomePage;