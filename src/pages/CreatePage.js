import { Container, Col, Row, Button } from 'reactstrap';
import { HUMANIMAGELAYERS } from '../shared/HUMANIMAGELAYERS';
import { DOGIMAGELAYERS } from '../shared/DOGIMAGELAYERS';
import { BACKGROUNDIMAGES } from '../shared/BACKGROUNDIMAGES';
import defaultImage from '../assets/images/sunset/default-image.png';
import blankCanvas from '../assets/images/background/blankCanvas.jpg';
import background from '../assets/images/sunset/background.png'
// import { selectGender } from '../options/optionSlice';
import { useState, useRef } from 'react';
import Thumbnails from '../components/Thumbnails';
import FilterSelection from '../components/FilterSelection';


const CreatePage = () => {
    // const [gender, setGender] = useState("");
    // const [age, setAge] = useState("");
    // const [bodyLanguage, setBodyLanguage] = useState("");
    // console.log(gender + age + dog + bodyLanguage)

    // const genderRef = useRef();
    // function updateGender(e){const gender = genderRef.current.value}

    // const [human, setHuman] = useState({
    //     gender: '',
    //     age: '',
    //     bodyLanguage: ''
    // })
    // console.log(`Gender: ${human.gender} - Age: ${human.age} - Body Language: ${human.bodyLanguage}`);

    let [humanSelection, setHuman] = useState(0)
    let [dogSelection, setDog] = useState(0)
    let [BGSelection, setBG] = useState(0)

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
                        <FilterSelection label='Backgrounds' subject='tag' setHuman={setBG} images={BACKGROUNDIMAGES}/> 
                        <Thumbnails thumbnails={BACKGROUNDIMAGES} handleClick={handleClick} classIdentifier='bg-thumbnail'/>
                    </Row>

                </Col>
                <Col md='6' className='ms-5'>
                    <div>
                        <h1>Sunset</h1>
                        <p>A high-quality, custom canvas featuring you and your pup silhouetted by a golden sunset </p>
                    </div>
                    <form>
                        {/* Choose Human */}
                        <FilterSelection label='Gender' subject='gender' setHuman={setHuman} images={HUMANIMAGELAYERS}/>
                        <FilterSelection label='Age' subject='age' setHuman={setHuman} images={HUMANIMAGELAYERS}/>
                        <FilterSelection label='Body Language' subject='bodyLanguage' setHuman={setHuman} images={HUMANIMAGELAYERS}/>
                        <Thumbnails thumbnails={HUMANIMAGELAYERS} handleClick={handleClick} classIdentifier='human-thumbnail'/>

                        {/* Choose Dog */}
                        <FilterSelection label='Dog Breed' subject='breed' setHuman={setDog} images={DOGIMAGELAYERS}/>
                        <Thumbnails thumbnails={DOGIMAGELAYERS} handleClick={handleClick} classIdentifier='dog-thumbnail'/>

                        <Button className='my-3 button-wide-transparentbg'>Add to cart</Button>

                    </form>
                </Col>
            </Row>
            
        </Container>
     );
}
 
export default CreatePage;