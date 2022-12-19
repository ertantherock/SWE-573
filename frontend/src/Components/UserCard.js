import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect, Connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DefaultProfileImage from './DefaultProfileImage';
import Input from './Input';
import { updateUser } from '../allAPI/apis'; 
import { useEffect } from 'react';


// import { Auth} from '../sharedAPI/ContextAuth';

const UserCard = props => {
  const [inEditMode, setInEditMode] = useState(false);
  const pathUsername = props.match.params.username;
  const loggedInUsername = props.username;
  const [updatedUserName, setupdatedUserName] = useState();
  const [user, setUser] = useState({});
  const [newImage, setNewImage] = useState();

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

 

useEffect(() => {
  if(!inEditMode){
    setupdatedUserName(undefined);
    setNewImage(undefined)
  } else {
    setupdatedUserName(username)
  }
  
},[inEditMode])

  
  const {username,mail,  image} = user;


  const onClickSave = async() => {
    const body = {
      username: updatedUserName,
      image: newImage
    }
    try {
      const response = await updateUser(username, body)
      setInEditMode(false);
      setUser(response.data)     
      
    } catch (error) {
      
    }
    
  }
 

  const onChangeFile = (event) => {
      const file = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setNewImage(fileReader.result);
      }
      fileReader.readAsDataURL(file);

  }

  return <div className='card'>
    <div className='card-header'>
    <DefaultProfileImage  
    className="rounded-circle shadow" 
    width="200" height="200" 
    alt={`${username} profile`} 
    image = {image}
    tempImage={newImage} />
    
    
      
    </div >
    <div className='card-body text-center'>
      
        
        {!inEditMode &&
          (
          <div>
              <h1>
                {pathUsername}
              </h1>
              <button className='btn btn-success' onClick={() => setInEditMode(true)} >
                
                Edit Profile
              </button>
              
          </div>
          )
          }
          {inEditMode && (
            <div>
              <Input 
              onChange={(event) =>{setupdatedUserName(event.target.value)}} 
              defaultValue={pathUsername} label ="Edit Profile"></Input>
              <input type="file" onChange={onChangeFile}/>
              
              <div>
                <button onClick={onClickSave}>
                  Save
                </button>
                <button onClick={() => setInEditMode(false)}>
                  Cancel
                </button>
              </div>
            </div>
            
          )}
        
       
        
       
        
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