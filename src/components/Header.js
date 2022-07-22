import { Navbar, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return ( 
        <Navbar className='header d-flex justify-content-between' expand='md'>
            <NavLink className='navLink' to='/'>
                <i className="fa fa-regular fa-bars"></i>
            </NavLink>

            <NavLink to='/' className="mx-auto navLink">
                <h1 className='col-4 my-0 header__siteTitle'>Paw Portraits</h1>
            </NavLink>

            <NavLink to='/' className='navLink'>
                <i className='fa fa-home fa-lg' />
                <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
        </Navbar>
        
     );
}
 
export default Header;