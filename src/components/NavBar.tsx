import React from 'react'

import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
const NavBar = () => {
  return (
   <>
   <nav>
   <Link to={''}>Home page</Link>
   <Link to={'product'}>Product page</Link>
   <Link to={'profile'}>Profile page</Link>
   <Link to={'cart'}>Cart page</Link>
   
   </nav>
   </>
  )
  
}

export default NavBar