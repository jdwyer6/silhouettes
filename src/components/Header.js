import { Navbar, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import { FaShoppingCart } from "react-icons/fa";
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
// import Modal_Cart from './modal/modal_cart';
// import Modal_Checkout from './modal/modal_checkout';


const Header = ({humanSelection, dogSelection, BGSelection, cartItems, setCartItems, total, setTotal, modalOpen, open, close}) => {

    return ( 
        <>
            <Navbar className='d-flex justify-content-between align-content-center header-nav'>
                <NavLink className='navLink' to='/'>
                    <i className='fa fa-home fa-lg' />
                </NavLink>

                <NavLink to='/' className="mx-auto navLink">
                    <h1 className='col-4 my-0 header-nav__siteTitle'>Paw Portraits</h1>
                </NavLink>

                <div className="shopping-cart navLink">
                    <FaShoppingCart onClick={() => (modalOpen ? close() : open())} className='shopping-cart__icon'/>
                    {cartItems.length > 0 ? (
                        <div className="shopping-cart__notification">
                            <p>{cartItems.length}</p>
                        </div>
                    ) : <></>}

                    
                </div>

            </Navbar>
        

        </>
        
     );
}
 
export default Header;