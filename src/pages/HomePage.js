import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import homeImg1 from '../assets/images/home/home-img-1.png';
import homeImg2 from '../assets/images/home/home-img-2.png';
import homeImg3 from '../assets/images/home/home-img-3.png';
import earth from '../assets/images/home/Earth.png';
import letter from '../assets/images/home/Letter.png';
import clock from '../assets/images/home/Clock.png';
import homeExample from '../assets/images/home/homeExample.png';
import Review from '../components/Review';
import reviewImg1 from '../assets/images/home/reviewImg1.jpg';
import reviewImg2 from '../assets/images/home/reviewImg2.jpg';
import reviewImg3 from '../assets/images/home/reviewImg3.jpg';
import mobileHero from '../assets/images/home/mobileHero.png';


const HomePage = () => {
    return ( 

        <Container>
            <Row className='d-md-flex align-items-center d-none adj-height'>
                <Col className='d-flex' md='6'>
                    <Col className='d-flex align-items-center justify-content-center' >
                        <img src={homeImg1} alt='home-img' className='m-3' width='100%' height='auto'/>
                    </Col>
                    <Col>
                        <img src={homeImg2} alt='home-img' className='m-3' width='50%' height='auto'/>
                        <img src={homeImg3} alt='home-img' className='m-3' width='85%' height='auto'/>
                    </Col>
                    
 
                </Col>
                <Col className=''>
                    <h1 className='mb-0'>Custom canvas art at the click of a button.</h1>
                    <h4>The perfect gift for any animal-lover.</h4>
                    <Link to='/create'>
                        <button className='btn-primary my-4'>GET STARTED</button>
                    </Link>
                    
                </Col>
            </Row>

            {/* Mobile landing page */}
            <Row className='d-md-none'>
                <h1 className='my-4'>Custom canvas art at the click of a button.</h1>
                <img src={mobileHero} />
                <Link to='/create' className='text-center'>
                    <button className='btn-primary my-4'>GET STARTED</button>
                </Link>
            </Row>
            <Row className='border-top-bottom padding-top-bottom my-large'>
                <Col xs='12' md='4' className='p-2 p-md-5 text-center'>
                    <img src={clock} width='50%'/>
                    <h3 className='mt-3 mb-0'>24 hour delivery</h3>
                    <p>Just in time for the holidays!</p>
                </Col>
                <Col xs='12' md='4' className='p-2 p-md-5 text-center'>
                    <img src={earth} width='50%'/>
                    <h3 className='mt-3 mb-0'>Worldwide Shipping</h3>
                    <p>Anywhere, anytime.</p>
                </Col>
                <Col xs='12' md='4' className='p-2 p-md-5 text-center'>
                    <img src={letter} width='50%'/>
                    <h3 className='mt-5 mb-0'>Free returns</h3>
                    <p>Satisfaction guaranteed</p>
                </Col>
            </Row>
            <Row className='padding-top-bottom feature-section d-flex align-items-center my-large'>
                <Col md='6'>
                    <h1 className='mb-0'>Perfect for any room!</h1>
                    <h4>Liven up the living room. Or add some spice to the kitchen.</h4>
                </Col>
                <Col>
                    <img className='my-md-0 my-4' src={homeExample} width='100%'/>
                </Col>
            </Row>
            <Row className='my-large'>
                <h3 className='my-5 text-center'>See what everyone is saying!</h3>
                <Col>
                    <Review img={reviewImg1} text="Fur-real this was the best purchase I've ever made!" name='@johnandhisdog'/>
                </Col>
                <Col>
                    <Review img={reviewImg2} text="What a great idea! Love my new portrait" name='@doglover1234' pos='-140px'/>
                </Col>
                <Col>
                    <Review img={reviewImg3} text="I can't stop raving about my purchase. Love it!" name='@aguyandhisdog' pos='-100px'/>
                </Col>
            </Row>
            <Row>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-muted">&copy; 2022 Jake Dwyer</p>
                </footer>
            </Row>
        </Container>

     );
}
 
export default HomePage;