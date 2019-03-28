import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'grey',
    textDecoration: 'none',
    color: 'white',
  }

  return (
    <div className='navbar'>
      <NavLink
      to='/'
      exact style={link}
      activeStyle={{background: 'red'}}
      >Home</NavLink>
      <NavLink
      to='/movies'
      exact style={link}
      activeStyle={{background: 'red'}}
      >Movies</NavLink>
      <NavLink
      to='/directors'
      exact style={link}
      activeStyle={{background: 'red'}}
      >Directors</NavLink>
      <NavLink
      to='/actors'
      exact style={link}
      activeStyle={{background: 'red'}}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
