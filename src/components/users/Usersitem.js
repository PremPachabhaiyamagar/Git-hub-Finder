import React from 'react';
import Proptypes from 'prop-types';
const Usersitem = (props) => {
    const {login,avatar_url,html_url} = props.user;
    return (
        <div className='card text-center'>
          <img src={avatar_url} 
          alt = '' 
          className='round-img' 
          style={{width:'60px'}} />
          <h1>{login}</h1>
          <div>
            <a href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
          </div>
        </div>
    )
}
Usersitem.propTypes ={
  user : Proptypes.object.isRequired
}
export default Usersitem