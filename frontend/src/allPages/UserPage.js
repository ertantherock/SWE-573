import React, { useEffect, useState } from 'react';
import App from '../App';
import UserCard from '../Components/UserCard';
import { Auth } from '../sharedAPI/ContextAuth';
import { getUser } from '../allAPI/apis';


const UserPage = props => {

    

    const [user,setUser] = useState({});

    useEffect(() => {
        const loadUser = async () => {
            try {
              
              const response =  await getUser(props.match.params.username)
              setUser(response.data)
            } catch (error) {}
        
          }

        loadUser();
    }, [props.match.params.username])




    return (
        <div className='container'>
            <UserCard  user={user} />
        </div>
    );
};

export default UserPage;