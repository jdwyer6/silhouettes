import { Navbar, NavItem, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import { FaShoppingCart } from "react-icons/fa";
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai';


const Header = ({cartItems, modalOpen, open, close}) => {

    return ( 
        <Container style={{borderBottom: '1px solid gray'}}>
            <Navbar className='d-flex justify-content-between align-content-center header-nav'>
                <NavLink className='navLink' to='/'>
                    {/* <AiOutlineMenu style={{transform: 'scale(1.5)'}}/> */}
                    <AiOutlineHome style={{transform: 'scale(1.6)'}}/>
                </NavLink>

                <NavLink to='/' className="mx-auto navLink">
                    <h1 className='col-4 my-0 header-nav__siteTitle'>Paw Portraits</h1>
                </NavLink>

                <div className="shopping-cart navLink">
                    <FaShoppingCart style={{transform: 'scale(1.5)'}} onClick={() => (modalOpen ? close() : open())} className='shopping-cart__icon'/>
                    {cartItems.length > 0 ? (
                        <div className="shopping-cart__notification">
                            <p>{cartItems.length}</p>
                        </div>
                    ) : <></>}

                    
                </div>

            </Navbar>
        

        </Container>
        
     );
}
 
export default Header;