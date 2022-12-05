import React from 'react';
import { useSelector } from 'react-redux';
import SubmitPosts from '../Components/SubmitPosts';
import TopBar from '../Components/TopBar';


const HomePage = () => {
    
    const { userLoggedIn} = useSelector(store => ({userLoggedIn: store.userLoggedIn}))

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    {userLoggedIn === true && <SubmitPosts/>}
                </div>
                {/* <div className='col-6 col-md-4'>
                    
                {userLoggedIn === true && 'UserListWill Shown Here'}

                </div> */}

            </div>
        </div>
    );
};

export default HomePage;