import { Container, Col, Row, Button } from 'reactstrap';
import { HUMANIMAGELAYERS } from '../shared/HUMANIMAGELAYERS';
import defaultImage from '../assets/images/sunset/default-image.png';
import blankCanvas from '../assets/images/background/blankCanvas.jpg';
// import OptionCard from '../options/OptionCard';
// import { selectGender } from '../options/optionSlice';
import { useState, useRef } from 'react';


const CreatePage = () => {
    // const [gender, setGender] = useState("");
    // const [age, setAge] = useState("");
    const [dog, setDog] = useState("");
    // const [bodyLanguage, setBodyLanguage] = useState("");
    // console.log(gender + age + dog + bodyLanguage)

    // const genderRef = useRef();
    // function updateGender(e){const gender = genderRef.current.value}

    const [human, setHuman] = useState({
        gender: '',
        age: '',
        bodyLanguage: ''
    })
    console.log(`Gender: ${human.gender} - Age: ${human.age} - Body Language: ${human.bodyLanguage}`);




    return ( 
        <Container>
            <Row className='create-section-1'>
                <Col md='6' className='preview-container'>
                    <img src={blankCanvas} alt='blank-canvas' className='preview-container__blankCanvas'></img>
                    <img src={defaultImage} alt="default-image" className='preview-container__previewImage'></img>
                </Col>
                <Col md='4' className='ms-5'>
                    <div>
                        <h1>Sunset</h1>
                        <p>A high-quality, custom canvas featuring you and your pup silhouetted by a golden sunset </p>
                        <Button>Customize</Button>
                    </div>
                    <form>
                        <div className="my-3">
                            <label htmlFor='gender'>Gender:</label>
                            <select onChange={(e) => {setHuman({gender: e.target.value})}} name="gender" id="gender" className="form-select" aria-label="gender" defaultValue={'male'}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="all-genders">All</option>
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
                        <Row>
                            {/* {HUMANIMAGELAYERS.filter((val) => {
                                if(gender === 'male')
                                    return val
                            })} */}
                            {HUMANIMAGELAYERS.map((img) => {
                                return(
                                    <div className="option-container">
                                        <img className='option-container__image' src={img.image}></img>
                                    </div>
                                )
                            })}

                            {/* {HUMANIMAGELAYERS.filter((val) => {
                                if(searchTerm == ''){
                                    return val
                                }else if(searchTerm == 'all-genders'){
                                    return val
                                }else if(val.gender == searchTerm.toLowerCase()){
                                    return val
                                }
                                }).map((val, key) => {
                                return(
                                    <div onClick={(e) => handleClick(val.id)} key={key} className='option-container'>
                                        <img className='option-container__image' src={val.image}></img>
                                    </div>
                                ) 
                            })} */}
                        </Row>


                        

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

                    </form>
                    <section>
                    </section>
                </Col>
            </Row>

        </Container>
     );
}
 
export default CreatePage;