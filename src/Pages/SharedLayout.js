import React from 'react'
import {Outlet} from 'react-router-dom';
import StyleNavbar from './styledNavbar';


const SharedLayout = () => {
  return (
    <div>
        <StyleNavbar></StyleNavbar>
        <Outlet />
      
    </div>
  )
}

export default SharedLayout;
