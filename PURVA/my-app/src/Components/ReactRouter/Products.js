import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export const Products = () => {
  return (
    <>
    <div>
        <input type="search" placeholder='Search' />
    </div>
    <nav>
        <Link to='feature'>Features</Link>
        <Link to='new'>New</Link>
    </nav>
    <Outlet/>
    </>
  )
}
