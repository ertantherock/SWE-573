import React, { Component } from 'react';
import { getUsers } from '../allAPI/apis';


class UserList extends Component {
    
    state = {
      users: []
    };

componentDidMount () {
    getUsers().then(response => {
        this.setState({
            users: response.data
        });
    });
}


    render() {
        const {users } =this.state;
        return (
            <div className='card '>
                <h4 className='card-header text-center'>User List</h4>
                <div className="list-group ">
                    {users.map((user => (
                        
                        <div
                        className="list-group-item list-group-item-action"
                        key={user.id}>
                            {user.username}
                        </div>
                    
                    )))}
                </div>
                
                
                
            </div>
        );
    }
}

export default UserList;