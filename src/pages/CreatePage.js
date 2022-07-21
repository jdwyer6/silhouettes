import { Container, Col, Row, Button } from 'reactstrap';
import { HUMANIMAGELAYERS } from '../shared/HUMANIMAGELAYERS';
import { DOGIMAGELAYERS } from '../shared/DOGIMAGELAYERS';
import defaultImage from '../assets/images/sunset/default-image.png';
import blankCanvas from '../assets/images/background/blankCanvas.jpg';
import background from '../assets/images/sunset/background.png'
// import OptionCard from '../options/OptionCard';
// import { selectGender } from '../options/optionSlice';
import { useState, useRef } from 'react';
import Thumbnails from '../components/Thumbnails';


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

    const handleClick = (e) =>{
        if(e.currentTarget.classList.contains('human-thumbnail')){
            setHuman(e.currentTarget.id)
            console.log("Human Selection: " + humanSelection);
        }else if(e.currentTarget.classList.contains('dog-thumbnail')){
            setDog(e.currentTarget.id)
            console.log('Dog Selection: ' + dogSelection)
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
                <Col md='6' className='preview-container'>
                    <img src={blankCanvas} alt='blank-canvas' className='preview-container__blankCanvas'></img>
                    <img src={background} alt="default-image" className='preview-container__previewBackground'></img>
                    <img src={HUMANIMAGELAYERS[humanSelection].image} alt='human-image' className='preview-container__previewHuman'></img>
                    <img src={DOGIMAGELAYERS[dogSelection].image} alt='dog-image' className='preview-container__previewDog'></img>
                </Col>
                <Col md='4' className='ms-5'>
                    <div>
                        <h1>Sunset</h1>
                        <p>A high-quality, custom canvas featuring you and your pup silhouetted by a golden sunset </p>
                        <Button>Add to cart</Button>
                    </div>
                    <form>
                        <div className="my-3">
                            <label htmlFor='gender'>Gender:</label>
                            <select onChange={(e) => {setHuman({gender: e.target.value})}} name="gender" id="gender" className="form-select" aria-label="gender" defaultValue={'male'}>
                                <option className='opt' value="male">Male</option>
                                <option className='opt' value="female">Female</option>
                                <option className='opt' value="all-genders">All</option>
                            </select>
                        </div>
                        <div className="my-3">
                            <label htmlFor='age'>Age:</label>
                            <select onChange={(e) => {setHuman({age: e.target.value})}} name="age" id="age" className="form-select" aria-label="age" defaultValue={"adult"}>
                                <option value="child">Child</option>
                                <option value="teen">Teen</option>
                                <option value="adult">Adult</option>
                                <option value="elderly">Elderly</option>
                            </select>
                        </div>
                        <div className="my-3">
                            <label htmlFor='body-language'>Body Language:</label>
                            <select onChange={(e) => {setHuman({bodyLanguage: e.target.value})}} name="body-language" id="body-language" className="form-select" aria-label="body-language" defaultValue={"adult"}>
                                <option value="Standing">Standing</option>
                                <option value="Seated">Seated</option>
                                <option value="Running">Running</option>
                            </select>
                        </div>
                        
                        <Thumbnails dogThumbnails={HUMANIMAGELAYERS} handleClick={handleClick} classIdentifier='human-thumbnail'/>


                        <div className="my-3 dog-container">
                            <label htmlFor='dog'>Dog Breed:</label>
                            <select onChange={(e) => {setDog(e.target.value)}} name="dog" id="dog" className="form-select" aria-label="Dog dog">
                                <option value="German Shepard">German Shepard</option>
                                <option value="Australian Shepard">Australian Shepard</option>
                                <option value="Chihuahua">Chihuahua</option>
                                <option value="Schnauzer">Schnauzer</option>
                                <option value="Poodle">Poodle</option>
                                <option value="Golden Retriever">Golden Retriever</option>
                                <option value="Husky">Husky</option>
                            </select>
                        </div>

                        <Thumbnails dogThumbnails={DOGIMAGELAYERS} handleClick={handleClick} classIdentifier='dog-thumbnail'/>
                    </form>
                    <section>
                    </section>
                </Col>
            </Row>
            

        </Container>
     );
}
 
export default CreatePage;