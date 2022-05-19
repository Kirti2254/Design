import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div className='whole'>
                <div className='bg_gradient'>
                    <nav className='main-nav'>
                        <div className='logo'>
                            <h2>Logo.here</h2>
                        </div>
                        <div className='nav-items'>
                            <ul>
                                <li className='aboutus'>
                                    <Link to='/aboutus'>AboutUs</Link>
                                </li>
                                <li>
                                    <Link to='/ourblogs'>Our Blogs</Link>
                                </li>
                                <li>
                                    <Link to='/contactus'>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='signuplogin'>
                            <a href="something" class="button1">Sign Up</a>
                            <a href="something" class="button">Login</a>
                        </div>
                    </nav>
                </div> 
            </div>
        </>
    )
}
export default Navbar;