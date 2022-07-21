import { Navbar, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return ( 
        <Navbar className='header d-flex justify-content-between' expand='md'>
            <div className="mr-auto d-flex">
            <i className="fa fa-regular fa-bars"></i>
            </div>
            <div className="mx-auto">
                <h1 className='col-4 my-0 header__siteTitle'>Paw Portraits</h1>
            </div>
            <div className="ml-auto">
                <i className='fa fa-home fa-lg' />
            </div>
        </Navbar>
        
     );
}
 
export default Header;