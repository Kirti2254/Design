import React from 'react'
import './Navbar.css'
import Square from '../images/red-black-square.jpg';
import Capture from '../images/Capture.JPG';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { FaMenu } from 'react-icons/fa';
import { BiAlignLeft } from "react-icons/bi";
import { BiAdjust } from "react-icons/bi";
import { BiCalendarX } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
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
                                    <a href='/'>AboutUs</a>
                                </li>
                                <li>
                                    <a href='/'>Our Blogs</a>
                                </li>
                                <li>
                                    <a href='/'>Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className='signuplogin'>

                            <a href="something" class="button1">Sign Up</a>


                            <a href="something" class="button">Login</a>


                        </div>

                    </nav>

                    <div className='container'>
                        <div className='left'>
                            <div className='left_head'>
                                <h1 >Raise Capital. <br />Build fast.</h1>
                            </div>
                            <div className='left_cont'>
                                <h3>Lorem ipsum hemivis sos att jtvis.<br />
                                    Dukan vara drabbad.
                                </h3>
                            </div>
                            <button className='button2'>
                                Get Started
                            </button>

                        </div>
                        <div className='right'>
                            <img src='/Group 1.png' alt='Photo' />

                        </div>
                    </div>
                </div>


                <div className='Pools'>
                    <div className='Pools_content'>
                        <h1>Pools</h1>
                        <p>Proin nec convallis dui, ac euismod ligula.
                            Donec mi nunc, rhoncus eget eros eu, consequat
                            congue magna. <br />Aenean ultricies dui ut massa laoreet,
                            posuere faucibus risus vestibulum.</p>
                    </div>

                    <div className='fontawesome'>
                        {/* <BiAlignLeft/>
              <BiAdjust/>
              <BiBell/>
              <BiCalendarX/>
              <BiBell/> */}

                        <ul className='fontawesome_list'>
                            <li><BiAlignLeft /></li>
                            <li><BiAdjust /></li>
                            <li><BiBell /></li>
                            <li><BiCalendarX /></li>
                            <li><BiBell /></li>
                        </ul>



                    </div>



                </div>


                {/* <div className='whole_coloromni'> */}
                <div className='color_omni'>
                    <div className='Omnistart'>

                        <h1 className='Omni_cont'>The Four Tiers of Omnistart Network</h1>
                        <h2 className='Omni_cont_sub'>Lorem ipsum norosk karoke trasm, exovylogi.<br /> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</h2>
                    </div>
                </div>


                <div className='container2'>
                    <div className='left2'>
                        <img src={Square} alt='Photo' />
                    </div>
                    <div className='right2'>
                        <img src={Capture} alt='Photo' />
                    </div>
                </div>
                <div className='cont_down'>
                    <div className='left_down'>
                        <img src={Capture} alt='Photo' />
                    </div>

                    <div className='right_down'>
                        <img src={Square} alt='Photo' />
                    </div>
                </div>



                <div className='color_container3'>
                    <div className='container3'>
                        {/* <div className='left3'> */}
                        <div className='left_logo'>
                            <h1>Logo.here</h1>
                            <p>Lorem Ipsum er rett og slett dummytekst fra og for
                                trykkeindustrien. Lorem Ipsum har vært bransjens standard for
                                dummytekst helt siden 1500-tallet, da en ukjent boktrykker
                                stokket en mengde bokstaver for å lage et prøveeksemplar av en bok.
                            </p>
                            {/* </div> */}
                        </div>
                        <div className='center3'>
                            <h1>Company</h1>

                            <ul className='center_list'>
                                <li className='about_us'>AboutUs</li>
                                <li className='contact_us'>ContactUs</li>
                                <li className='FAQ'>FAQs</li>
                                <li className='PP'>Privacy Policy</li>
                                <li className='TC'>Terms and Conditions</li>
                            </ul>
                        </div>
                        <div className='right3'>
                            <h1>Find Us</h1>
                            <ul className='right_list'>
                                <li className='facebook'>Facebook</li>
                                <li className='instagram'>Instagram</li>
                                <li className='whatsapp'>Whatsapp</li>
                                <li className='gmail'>Gmail</li>
                                <li className='linkedln'>Linkedln</li>
                            </ul>


                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Navbar;