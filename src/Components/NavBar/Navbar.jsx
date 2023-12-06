import React, { useState } from "react";
import './Navbar.css';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import Modal from "../../Pages/Modal_login"

//import { Button } from '../button';


//const [button, setButton] = useState(true);

// const showButton = () => {
//     if(window.innerWidth <= 960){
//         setButton(false);
//     } else {
//         setButton(true);
//     }
// }

const Navbar = () => {

  const [modal, setModal] = useState(false);



    return (
        <div>
        <nav className='nav'>
            <div className='nav-header'>
                <a href="/" className='brallium-title'>Brallium</a>
            </div>
            <div className='nav-content'>
                <h1 className='nav-currency'>USD ($)</h1>
                <ul className='nav-links'>
                    <li><a href='/shop'>Shop</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/faq'>FAQ</a></li>
                    <li><a href='/blogs'>Blogs</a></li>
                </ul>
               {/*} {button && <Button buttonStyle='btn--outline'>SHOP ALL</Button>} */}
                <div className='nav-icons'>

                    <a onClick={() => {setModal(true)}}><FaUserCircle /></ a>
                    <a href='/cart'><FaShoppingCart /></a>
                </div>
            </div>
            
        </nav>
        <Modal setModal={setModal} modal={modal}/>
        </div>
        
        
    )
}

export default Navbar;