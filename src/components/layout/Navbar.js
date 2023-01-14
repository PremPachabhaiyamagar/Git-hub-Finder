import React from 'react'
import Proptypes from 'prop-types'
 const Navbar = ({title,icon}) => {
    return (
      <div className='navbar bg-primary'>
        <h1>
          <i className={icon} /> {title}
        </h1>
      </div>
    );
}
Navbar.defaultProps = {
  title : 'github-finder',
  icon : 'fab fa-github'
 }
Navbar.propTypes = {
  title :Proptypes.string.isRequired,
  icon : Proptypes.string.isRequired
 }

export default Navbar


