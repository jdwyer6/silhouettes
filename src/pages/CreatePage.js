import { Container, Col, Row, Button } from 'reactstrap';
import { HUMANIMAGELAYERS } from '../shared/HUMANIMAGELAYERS';
import { DOGIMAGELAYERS } from '../shared/DOGIMAGELAYERS';
import { BACKGROUNDIMAGES } from '../shared/BACKGROUNDIMAGES';
import blankCanvas from '../assets/images/background/blankCanvas.jpg';
import { useState, useRef, useEffect } from 'react';
import Thumbnails from '../components/Thumbnails_Human';
import Thumbnails_Dog from '../components/Thumbnails_Dog';
import Thumbnails_Background from '../components/Thumbnails_Background';
import FilterSelection from '../components/FilterSelection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from 'framer-motion';
import Details from '../sections/Details';
import FAQ from '../sections/FAQ';
import Reviews from '../sections/Reviews';
import ShippingInfo from '../sections/ShippingInfo';



const CreatePage = ({setHuman, humanSelection, setDog, dogSelection, setBG, BGSelection, setCartItems, cartItems, modalOpen, open, close}) => {
    const [gender, setGender] = useState("All");
    const [age, setAge] = useState("All");
    const [breed, setBreed] = useState("All");
    const [bgTag, setBgTag] = useState('All');

    const [section, setSection] = useState(0);
    const infoSections = [<Details />, <ShippingInfo />, <Reviews />, <FAQ /> ];


    const handleClick = (e) =>{
        if(e.currentTarget.classList.contains('human-thumbnail')){
            setHuman(e.currentTarget.id)
            console.log("Human Selection: " + humanSelection);
        }else if(e.currentTarget.classList.contains('dog-thumbnail')){
            setDog(e.currentTarget.id)
            console.log('Dog Selection: ' + dogSelection)
        }else if(e.currentTarget.classList.contains('bg-thumbnail')){
            setBG(e.currentTarget.id)
            console.log('Background Selection: ' + BGSelection)
        }else{
            console.log('Problem with selection')
        }

        const options = [...document.getElementsByClassName('option-container')]
        options.forEach(option => {
            if(option.classList.contains('selected')){
                option.classList.remove('selected')
            }
        });
        e.currentTarget.classList.add('selected')
    }

    const handleCartClick = () => { 
        setCartItems(current => [...current, {humanSelection: {humanSelection}, dogSelection:{dogSelection}, BGSelection:{BGSelection}, price:29.99}])
        modalOpen ? close() : open()
    }

    return ( 
        <Container>

            <ToastContainer />
            <Row className='create-section'>
                <Col xs='12' lg='6'>
                    <Col className='mx-auto create-section__image-preview'>
                        <div className='x'>
                            <img src={blankCanvas} alt='blank-canvas' className='create-section__image-preview--blankCanvas'></img>
                            <img src={BACKGROUNDIMAGES[BGSelection].image} alt="default-image" className='create-section__image-preview--previewBackground'></img>
                            <img src={HUMANIMAGELAYERS[humanSelection].image} alt='human-image' className='create-section__image-preview--previewHuman'></img>
                            <img src={DOGIMAGELAYERS[dogSelection].image} alt='dog-image' className='create-section__image-preview--previewDog'></img>
                        </div>
                    </Col>
                    <Col className='my-5'>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className={section === 0 ? "nav-link text-dark active" : "nav-link text-dark"} aria-current="page" onClick={()=>setSection(0)}>Details</a>
                            </li>
                            <li className="nav-item">
                                <a className={section === 1 ? "nav-link text-dark active" : "nav-link text-dark"} onClick={()=>setSection(1)}>Shipping Info</a>
                            </li>
                            <li className="nav-item">
                                <a className={section === 2 ? "nav-link text-dark active" : "nav-link text-dark"} onClick={()=>setSection(2)}>Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className={section === 3 ? "nav-link text-dark active" : "nav-link text-dark"} onClick={()=>setSection(3)}>FAQ</a>
                            </li>
                        </ul>
                        <div className='my-3'>
                            {infoSections[section]}
                        </div>
                    </Col>

                    
                </Col>

                <Col>
                    <Col className='mt-5 mt-lg-0 mx-lg-5 create-section__select-background'>
                        <h3>Select a background</h3>
                        <FilterSelection label='Backgrounds' subject='tag' setHuman={setBG} setFilter={setBgTag} images={BACKGROUNDIMAGES}/> 
                        <Thumbnails_Background thumbnails={BACKGROUNDIMAGES} handleClick={handleClick} classIdentifier='bg-thumbnail' bgTag={bgTag}/>
                    </Col>
                    <Col className='mx-lg-5 mt-5'>
                        <div>
                            <h3>Select a human</h3>
                        </div>
                        {/* Choose Human */}
                        <FilterSelection label='Filter by gender' subject='gender' setFilter={setGender} images={HUMANIMAGELAYERS}/>
                        <FilterSelection label='Filter by age' subject='age' setFilter={setAge} images={HUMANIMAGELAYERS}/>
                        <Thumbnails thumbnails={HUMANIMAGELAYERS} handleClick={handleClick} classIdentifier='human-thumbnail' gender={gender} age={age}/>
                    </Col>

                    <Col className='mx-lg-5 my-5 create-section_select-dog'>
                        <h3>Select a pup</h3>
                        {/* Choose Dog */}
                        <FilterSelection label='Filter by dog breed' subject='breed' setFilter={setBreed} images={DOGIMAGELAYERS}/>
                        <Thumbnails_Dog thumbnails={DOGIMAGELAYERS} handleClick={handleClick} breed={breed} setBreed={setBreed} classIdentifier='dog-thumbnail'/>
                        <button className='btn-primary my-3' onClick={handleCartClick}>Add to cart</button>
                    </Col>

                </Col>

            </Row>


            {/* <Row className='d-flex justify-content-center create-section'>
            </Row>


            <Row className='d-flex justify-content-center'>





            </Row> */}

        </Container>

        

    );
}
 
export default CreatePage;