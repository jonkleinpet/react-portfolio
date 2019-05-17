import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/sidebar.css'
export default function Sidebar() {
  return (
    <>
      <div className='navigation'>
        <ul>
          <li id="landing-view">
            <NavLink className={ 'sidebar-nav' } id={ 'js-landing' } to={ "/" }>
              Jonathan Kleinpeter
          </NavLink>
          </li>
          <div className='nav-divide' />
          <li id='js-projects'>
            <NavLink className={ 'sidebar-nav' } to={ "/projects" }>Projects</NavLink>
          </li>
          <div className='nav-divide' />
          <li id='js-learnMore'>
            <NavLink className={ 'sidebar-nav' } to={ "/about" }>Learn More</NavLink>
          </li>
        </ul>
        <div className='divide' />
      </div>
    </>
  );
}