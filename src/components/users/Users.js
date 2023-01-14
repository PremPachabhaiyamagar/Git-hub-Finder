import React from 'react';
import Usersitem from './Usersitem';
import Spinner from '../layout/spinner'
import Proptypes from 'prop-types';
const Users = ({users,loading})=> {
 if(loading){
  return <Spinner />
 }
    return (
      <div style={userStyle} >
        {users.map(user => (
          <Usersitem key={user.id} user={user}/>
        ))}
      </div>
    )
}
Users.propTypes ={
  users : Proptypes.array.isRequired,
  loading :Proptypes.bool.isRequired,
}
const userStyle = {
  display : 'grid',
  gridTemplateColumns : 'repeat(3,1fr)',
  gridGap : '1rem'
}
export default Users
