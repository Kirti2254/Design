import React from 'react'
import "./Landingpage.css";
import Photo from "../images/Group 1.png";

function Landingpage() {
    return(
          <>
          <div className='whole'>
          <div className='bg_gradient'>
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
                            <img src={Photo} alt='Photo' />  

                        </div>
                    </div>
                    </div>
                    </div>
  </>
    )
}

export default Landingpage;