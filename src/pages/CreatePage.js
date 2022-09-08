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


const CreatePage = ({setHuman, humanSelection, setDog, dogSelection, setBG, BGSelection, setCartItems, cartItems, modalOpen, open, close}) => {
    const [gender, setGender] = useState("All");
    const [age, setAge] = useState("All");
    const [breed, setBreed] = useState("All");
    const [bgTag, setBgTag] = useState('All');
    // console.log(`Gender: ${gender} \n Age: ${age} \n Breed: ${breed} \n BgTag: ${bgTag}`)

    // const [humanSelection, setHuman] = useState(0)
    // const [dogSelection, setDog] = useState(0)
    // const [BGSelection, setBG] = useState(0)


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
        // toast.success("Item added to cart", {position: toast.POSITION.TOP_CENTER});
        modalOpen ? close() : open()
    }

    return ( 
        <Container>

            <ToastContainer />

            <Row className='d-flex justify-content-center create-section'>
                <Col md='12' lg='6' className='create-section__image-preview'>
                    <div>
                        <img src={blankCanvas} alt='blank-canvas' className='create-section__image-preview--blankCanvas'></img>
                        <img src={BACKGROUNDIMAGES[BGSelection].image} alt="default-image" className='create-section__image-preview--previewBackground'></img>
                        <img src={HUMANIMAGELAYERS[humanSelection].image} alt='human-image' className='create-section__image-preview--previewHuman'></img>
                        <img src={DOGIMAGELAYERS[dogSelection].image} alt='dog-image' className='create-section__image-preview--previewDog'></img>
                    </div>

                </Col>

                <Col md='12' lg='6' className='mx-lg-5 mt-5 mt-lg-0'>
                    <div>
                        <h1>Customize</h1>
                        <p>A high-quality, custom canvas featuring you and your pup silhouetted by a scenic backdrop.</p>
                    </div>

                    {/* Choose Human */}
                    <FilterSelection label='Gender' subject='gender' setFilter={setGender} images={HUMANIMAGELAYERS}/>
                    <FilterSelection label='Age' subject='age' setFilter={setAge} images={HUMANIMAGELAYERS}/>
                    <Thumbnails thumbnails={HUMANIMAGELAYERS} handleClick={handleClick} classIdentifier='human-thumbnail' gender={gender} age={age}/>

                </Col>

            </Row>

            <Row className='d-flex justify-content-center'>

                <Col md='12' lg='5' className='create-section__select-background'>
                    <FilterSelection label='Backgrounds' subject='tag' setHuman={setBG} setFilter={setBgTag} images={BACKGROUNDIMAGES}/> 
                    <Thumbnails_Background thumbnails={BACKGROUNDIMAGES} handleClick={handleClick} classIdentifier='bg-thumbnail' bgTag={bgTag}/>

                </Col>

                <Col md='12' lg='6' className='create-section_select-dog'>
                        {/* Choose Dog */}
                        <FilterSelection label='Dog Breed' subject='breed' setFilter={setBreed} images={DOGIMAGELAYERS}/>
                        <Thumbnails_Dog thumbnails={DOGIMAGELAYERS} handleClick={handleClick} breed={breed} setBreed={setBreed} classIdentifier='dog-thumbnail'/>

                        <Button className='my-3 button__bgPrimary' onClick={handleCartClick}>Add to cart</Button>
                </Col>

            </Row>

        </Container>

        

    );
}
 
export default CreatePage;