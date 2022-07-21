import { Container, Col, Row, Button } from 'reactstrap';
import { HUMANIMAGELAYERS } from '../shared/HUMANIMAGELAYERS';
import defaultImage from '../assets/images/sunset/default-image.png';
import blankCanvas from '../assets/images/background/blankCanvas.jpg';
// import OptionCard from '../options/OptionCard';
// import { selectGender } from '../options/optionSlice';
import { useState } from 'react';


const CreatePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedId, setId] = useState(0);

    const handleClick = (clickedId) => {
        setId(clickedId)
        console.log(selectedId);
    }

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
                        <div className="my-3 gender-container">
                            <label for='gender'>Gender:</label>
                            <select onChange={event => {setSearchTerm(event.target.value)}} name="gender" id="gender" className="form-select" aria-label="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="all-genders">All</option>
                            </select>
                        </div>
                        <Row>
                            {HUMANIMAGELAYERS.filter((val) => {
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
                            })}
                        </Row>


                        

                        <div className="my-3 breed-container">
                            <label for='breed'>Dog Breed:</label>
                            <select name="breed" id="breed" class="form-select" aria-label="Dog breed">
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