import { Container, Row, Col, Button } from 'reactstrap';
import heroImg from '../assets/images/background/hero.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return ( 
        <Container className='d-flex align-items-center'>
            <Row className='hero-img-container'>

                {/* <img src={heroImg} alt="heroImg" className='px-0 hero-img-container__img'/> */}
                <div className='px-0 hero-img-container__img'></div> 
                <Col className="d-flex flex-column align-items-center hero-img-container__text">
                    <h2>Custom canvas art at the click of a button</h2>
                    <p>The perfect gift for any animal-lover</p>
                    <Link to='/create'><Button color='dark'>Get Started</Button></Link>
                </Col>
            </Row>
        </Container>
     );
}
 
export default HomePage;