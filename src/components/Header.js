import { Navbar, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import { FaShoppingCart } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Modal_Cart from './modal/modal_cart';
import Modal_Checkout from './modal/modal_checkout';


const Header = ({humanSelection, dogSelection, BGSelection, cartItems, setCartItems}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [checkoutModalOpen, setCheckoutModalOpen] = useState(false)

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const closeCheckoutModal = () => setCheckoutModalOpen(false);
    const openCheckoutModal = () => setCheckoutModalOpen(true);

    return ( 
        <>
            <Navbar className='d-flex justify-content-between align-content-center header-nav'>
                <NavLink className='navLink' to='/'>
                    <i className='fa fa-home fa-lg' />
                </NavLink>

                <NavLink to='/' className="mx-auto navLink">
                    <h1 className='col-4 my-0 header-nav__siteTitle'>Paw Portraits</h1>
                </NavLink>

                <FaShoppingCart onClick={() => (modalOpen ? close() : open())} className='navLink'/>
            </Navbar>

            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                {modalOpen && <Modal_Cart 
                    modalOpen={modalOpen} 
                    handleClose={close} 
                    humanSelection={humanSelection} 
                    dogSelection={dogSelection} 
                    BGSelection={BGSelection} 
                    cartItems={cartItems} 
                    setCartItems={setCartItems} 
                    closeCheckoutModal={closeCheckoutModal} 
                    openCheckoutModal={openCheckoutModal} 
                    setCheckoutModalOpen={setCheckoutModalOpen}
                    checkoutModalOpen={checkoutModalOpen}
                    />}
            </AnimatePresence>

            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                {checkoutModalOpen && <Modal_Checkout checkoutModalOpen={checkoutModalOpen} handleClose={closeCheckoutModal} cartItems={cartItems} setCartItems={setCartItems}/>}
            </AnimatePresence>
        

        </>
        
     );
}
 
export default Header;