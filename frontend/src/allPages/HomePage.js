import React from 'react';
import { useSelector } from 'react-redux';
import PostFeed from '../Components/PostFeed';
import SubmitPosts from '../Components/SubmitPosts';
import TopBar from '../Components/TopBar';
import LoginPage from './LoginPage';
import Welcome from "./WELCOME.gif";
import Welcome2 from "./Welcome2.png";



const HomePage = () => {
    
    const { userLoggedIn} = useSelector(store => ({userLoggedIn: store.userLoggedIn}))

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    {userLoggedIn ? (<SubmitPosts/> ): <img height="auto" width="180%"  src={Welcome2} alt="my-gif" />}
                    
                     
                </div>
                <div className='col'>
                {userLoggedIn ? (<PostFeed/>) : null}
                 
  
                </div>

            </div>
        </div>
    );
};

export default HomePage;