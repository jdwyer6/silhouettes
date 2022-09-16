import { Container, Row, Col, Button } from 'reactstrap';
import heroImg from '../assets/images/background/hero.jpg';
import { Link } from 'react-router-dom';
import Carousel from '../sections/Carousel';
import Dog from '../assets/images/Dog.png';
import Cat from '../assets/images/Cat.png';


const HomePage = () => {
    return ( 
        <Container>

            <Container className='p-0 align-items-center mx-auto'>
                <Row className='mx-auto hero-img-container float-on-hover'>

                    {/* <img src={heroImg} alt="heroImg" className='px-0 hero-img-container__img'/> */}
                    <Col className='px-0 hero-img-container__img'></Col> 
                    <Col className="align-items-center hero-img-container__text hidden-on-medium">
                        <h2>Custom canvas art at the click of a button</h2>
                        <p>The perfect gift for any animal-lover</p>
                        <Link to='/create'><Button color='dark'>Get Started</Button></Link>
                    </Col>
                </Row>
            </Container>
            <Container className='text-center mt-3 visible-on-medium'>
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
                    <Col className='me-3 mt-5 p-0 position-relative get-started float-on-hover' style={{borderRadius: '20px', overflow: 'hidden'}}>
                        <img src={Dog} width='100%'/>
                        <h2 className='gs-text'>Dogs</h2>
                        <Link to='/create'>
                            <Button className='position-absolute gs-button hidden-on-small'>Let's Go!</Button>
                        </Link>
                        
                    </Col>
                    <Col className='ms-3 p-0 mt-5 position-relative get-started float-on-hover' style={{borderRadius: '20px', overflow: 'hidden'}}>
                        <img src={Cat} width='100%' />
                        <h2 className='gs-text'>Other Pets</h2>
                        <Link to='/OtherPets'>
                            <Button className='position-absolute gs-button hidden-on-small'>Let's Go!</Button>
                        </Link>

                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Carousel />
                </Row>
            </Container>
        </Container>

     );
}
 
export default HomePage;