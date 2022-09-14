import { Container, Row, Col, Button } from 'reactstrap';
import heroImg from '../assets/images/background/hero.jpg';
import { Link } from 'react-router-dom';
import Carousel from '../sections/Carousel';
import Dog from '../assets/images/Dog.png';
import Cat from '../assets/images/Cat.png';


const HomePage = () => {
    return ( 
        <>
            <Container className='d-flex align-items-center mx-auto'>
                <Row className='mx-auto hero-img-container'>

                    {/* <img src={heroImg} alt="heroImg" className='px-0 hero-img-container__img'/> */}
                    <Col className='px-0 hero-img-container__img'></Col> 
                    <Col className="align-items-center hero-img-container__text hidden-on-small">
                        <h2>Custom canvas art at the click of a button</h2>
                        <p>The perfect gift for any animal-lover</p>
                        <Link to='/create'><Button color='dark'>Get Started</Button></Link>
                    </Col>
                </Row>
            </Container>
            <Container className='text-center mt-3 visible-on-small'>
                <Row >
                    <h2>Custom canvas art</h2>
                    <p>The perfect gift for any animal-lover</p>
                </Row>
                <Row>
                    <Link to='/create'><Button color='dark'>Get Started</Button></Link>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className='me-3 mt-5 position-relative get-started'>
                        <img src={Dog} width='100%' className='overflow-none' style={{borderRadius: '20px'}}/>
                        <h2 className='position-absolute text-white gs-text'>Dogs</h2>
                        <Button className='position-absolute gs-button'>Let's Go!</Button>
                    </Col>
                    <Col className='ms-3 mt-5 position-relative get-started'>
                        <img src={Cat} width='100%' className='overflow-none' style={{borderRadius: '20px'}}/>
                        <h2 className='position-absolute text-white gs-text'>Other Pets</h2>
                        <Button className='position-absolute gs-button'>Let's Go!</Button>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Carousel />
                </Row>
            </Container>
        </>

     );
}
 
export default HomePage;