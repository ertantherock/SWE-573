import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect, Connect } from 'react-redux';
// import { Auth} from '../sharedAPI/ContextAuth';

const UserCard = props => {
  const pathUsername = props.match.params.username;
  const loggedInUsername = props.username;
  let message = 'You cannot edit';
  if (pathUsername === loggedInUsername) {
    message = 'You can edit';
  }
  return <div>{message}</div>;
};

// class UserCardContextWrapper extends React.Component {
//   static contextType = Auth;
//   render() {
//     return <UserCard {...this.props} username={this.context.state.username} />;
//   }
// }


const mapStateToProps = store => {
  return {
      
      username: store.username
  };
};

export default connect(mapStateToProps)(withRouter(UserCard));