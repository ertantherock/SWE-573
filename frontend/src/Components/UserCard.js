import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect, Connect } from 'react-redux';
import defPicture from '../logo/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { Auth} from '../sharedAPI/ContextAuth';

const UserCard = props => {
  const pathUsername = props.match.params.username;
  const loggedInUsername = props.username;

 

  const {user} = props;
  const {username, mail, image} = user;
  let imageSource = defPicture;
  if (image) {
    imageSource = image;
  }


  return <div className='card'>
    <div className='card-header'>
    <img className="rounded-circle shadow" width="200" height="200" alt={`${username} profile`} src={imageSource} />
    </div>
      <div className='card-body text-center'>
        
        
        <h1>{props.match.params.username}</h1>

        <button className='btn btn-success'>
          
         Edit 
        </button>
        
        <FontAwesomeIcon icon="faCoffee" > </FontAwesomeIcon>
        
       
        
      </div>


  </div>;
};

// class UserCardContextWrapper extends React.Component {
//   static contextType = Auth;
//   render() {
//     return <UserCard {...this.props} username={this.context.state.username} />;
//   }
// }




export default (withRouter(UserCard));