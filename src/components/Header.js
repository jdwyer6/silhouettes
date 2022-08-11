import { Navbar, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import { FaShoppingCart } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Modal from './modal/modal';


const Header = ({humanSelection, dogSelection, BGSelection, cartItems, setCartItems}) => {

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    return ( 
        <>
            <Navbar className='header d-flex justify-content-between' expand='md'>
            <NavLink className='navLink' to='/'>
                <i className='fa fa-home fa-lg' />
            </NavLink>

            <NavLink to='/' className="mx-auto navLink">
                <h1 className='col-4 my-0 header__siteTitle'>Paw Portraits</h1>
            </NavLink>

            <FaShoppingCart onClick={() => (modalOpen ? close() : open())} className='navLink'/>
            </Navbar>

            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} humanSelection={humanSelection} dogSelection={dogSelection} BGSelection={BGSelection} cartItems={cartItems} setCartItems={setCartItems}/>}
            </AnimatePresence>
        

        </>
        
     );
}
 
export default Header;