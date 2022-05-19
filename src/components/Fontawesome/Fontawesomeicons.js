import React from 'react'
import './Fontawesomeicons.css';
//import Square from '../images/red-black-square.jpg';
//import Capture from '../images/Capture.JPG';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FaMenu } from 'react-icons/fa';
import { BiAlignLeft, BiAdjust,BiCalendarX,BiBell} from "react-icons/bi";




function Fontawesomeicons() {
  return (
    <>
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


                {/* <div className='whole_coloromni'> */}s

    </>
  )
}

export default Fontawesomeicons;



