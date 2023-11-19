// import React from 'react';
// import './Navbar.css';
// import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';

// const Navbar = () => {
//     return (
//         <nav className='nav'>
//             <div className='nav-header'>
//                 <a href="/" className='brallium-title'>Brallium</a>
//             </div>
//             <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</></li>
//             <div className='nav-content'>
//                 <h1 className='nav-currency'>USD ($)</h1>
//                 <ul className='nav-links'>
//                     <li><a href='/shop'>Shop</a></li>
//                     <li><a href='/about'>About</a></li>
//                     <li><a href='/faq'>FAQ</a></li>
//                     <li><a href='/blogs'>Blogs</a></li>
//                 </ul>
//                 <div className='nav-icons'>
//                     <a href='/login'><FaUserCircle /></a>
//                     <a href='/cart'><FaShoppingCart /></a>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar;

import React, { useState } from 'react';
import './Navbar.css';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("");

    return (
        <nav className='nav'>
            <div className='nav-header'>
                <a href="/" className='brallium-title'>Brallium</a>
            </div>
            <div className='nav-content'>
                <h1 className='nav-currency'>USD ($)</h1>
                <ul className='nav-links'>
                    <li onClick={() => setMenu("shop")}>
                        <Link to='/shop'>Shop</Link>
                        {menu === "shop" ? <hr /> : <></>}
                    </li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/faq'>FAQ</a></li>
                    <li><a href='/blogs'>Blogs</a></li>
                </ul>
                <div className='nav-icons'>
                    <a href='/login'><FaUserCircle /></a>
                    <a href='/cart'><FaShoppingCart /></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
