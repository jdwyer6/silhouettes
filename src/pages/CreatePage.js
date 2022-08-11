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


const CreatePage = ({setHuman, humanSelection, setDog, dogSelection, setBG, BGSelection, setCartItems, cartItems}) => {
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
        alert('One item added to your cart')        

    }

    return ( 
        <Container>


            <Row className='create-section-1'>
                <Col md='6' className='preview-col'>
                    <Row className='preview-container'>
                        <img src={blankCanvas} alt='blank-canvas' className='preview-container__blankCanvas'></img>
                        <img src={BACKGROUNDIMAGES[BGSelection].image} alt="default-image" className='preview-container__previewBackground'></img>
                        <img src={HUMANIMAGELAYERS[humanSelection].image} alt='human-image' className='preview-container__previewHuman'></img>
                        <img src={DOGIMAGELAYERS[dogSelection].image} alt='dog-image' className='preview-container__previewDog'></img>
                    </Row>
                    <Row>
                        <FilterSelection label='Backgrounds' subject='tag' setHuman={setBG} setFilter={setBgTag} images={BACKGROUNDIMAGES}/> 
                        <Thumbnails_Background thumbnails={BACKGROUNDIMAGES} handleClick={handleClick} classIdentifier='bg-thumbnail' bgTag={bgTag}/>
                    </Row>

                </Col>
                <Col md='6' className='ms-5'>
                    <div>
                        <h1>Sunset</h1>
                        <p>A high-quality, custom canvas featuring you and your pup silhouetted by a golden sunset </p>
                    </div>
                    <form>
                        {/* Choose Human */}
                        <FilterSelection label='Gender' subject='gender' setFilter={setGender} images={HUMANIMAGELAYERS}/>
                        <FilterSelection label='Age' subject='age' setFilter={setAge} images={HUMANIMAGELAYERS}/>
                        <Thumbnails thumbnails={HUMANIMAGELAYERS} handleClick={handleClick} classIdentifier='human-thumbnail' gender={gender} age={age}/>

                        {/* Choose Dog */}
                        <FilterSelection label='Dog Breed' subject='breed' setFilter={setBreed} images={DOGIMAGELAYERS}/>
                        <Thumbnails_Dog thumbnails={DOGIMAGELAYERS} handleClick={handleClick} breed={breed} setBreed={setBreed} classIdentifier='dog-thumbnail'/>

                        <Button className='my-3 button__bgPrimary' onClick={handleCartClick}>Add to cart</Button>

                    </form>
                </Col>
            </Row>
        </Container>

     );
}
 
export default CreatePage;