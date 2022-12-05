import React from 'react';
import App from '../App';
import UserCard from '../Components/UserCard';
import { Auth } from '../sharedAPI/ContextAuth';


const UserPage = props => {
    return (
        <div className='container'>
            <UserCard  />
        </div>
    );
};

export default UserPage;