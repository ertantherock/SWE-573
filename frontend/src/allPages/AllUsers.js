import React from 'react';
import App from '../App';
import UserCard from '../Components/UserCard';
import UserList from '../Components/UserList';
import { Auth } from '../sharedAPI/ContextAuth';


const UserPage = props => {
    return (
        <div className='container'>
            <UserList  />
        </div>
    );
};

export default UserPage;