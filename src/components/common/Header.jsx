import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="Header flex items-center justify-between px-20 py-5">
    <Link to={"/"}>
     <img src="/assets/images/logo.svg" alt="" />
    </Link>

    <ul className="flex gap-8 text-md">
      <Link to={"/contact"}>
        <li>Contact</li>
      </Link>
      <Link to={"/product"}>
        <li>Product</li>
      </Link>
    </ul>
    </div>
  )
}

export default Header