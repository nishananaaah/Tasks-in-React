import React from 'react'
import { Link } from 'react-router-dom'

const Router = () => {
  return (
    <div>
      <Link to={'/home'}>Home</Link>
      <Link to={'about'}>About</Link>
      <Link to={'contact'}>Contact</Link>

    </div>
  )
}

export default Router
