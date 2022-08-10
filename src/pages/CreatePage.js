import { Container, Col, Row, Button } from 'reactstrap';
import { HUMANIMAGELAYERS } from '../shared/HUMANIMAGELAYERS';
import { DOGIMAGELAYERS } from '../shared/DOGIMAGELAYERS';
import { BACKGROUNDIMAGES } from '../shared/BACKGROUNDIMAGES';
import defaultImage from '../assets/images/sunset/default-image.png';
import blankCanvas from '../assets/images/background/blankCanvas.jpg';
import background from '../assets/images/sunset/background.png'
// import { selectGender } from '../options/optionSlice';
import { useState, useRef, useEffect } from 'react';
import Thumbnails from '../components/Thumbnails';
import FilterSelection from '../components/FilterSelection';


const CreatePage = () => {
    const [gender, setGender] = useState("All")
    const [age, setAge] = useState("All");
    console.log(`Gender: ${gender} \n Age: ${age}`)
    const [filteredHumans, setFilteredHumans] = useState([...HUMANIMAGELAYERS]);

    // const[state, setState] = useState({ gender: 'All', age: 'All', bodyLanguage: 'All'})
    // const gender = state.gender
    // const age = state.age
    // const bodyLanguage = state.bodyLanguage

    // function filterGender(e){
    //     setState(prevState => {
    //         return{...prevState, gender: e.target.value}
    //     })
    // }

    const [humanSelection, setHuman] = useState(0)
    const [dogSelection, setDog] = useState(0)
    const [BGSelection, setBG] = useState(0)


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

            {/* <label>Gender</label>
            <select className='mb-5' onChange={filterGender}>
              <option>Male</option>
              <option>Female</option>
              <option>All</option>
            </select> */}

            {/* {images.map((img) => {
                return(
                    <div key={img.id} className={`d-flex align-items-center option-container`}>                        
                        <img className='option-container__image' src={img.image}></img>
                    </div>
                )
            })} */}


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
                        <FilterSelection label='Gender' subject='gender' setFilter={setGender} images={HUMANIMAGELAYERS}/>
                        <FilterSelection label='Age' subject='age' setFilter={setAge} images={HUMANIMAGELAYERS}/>
                        <Thumbnails thumbnails={HUMANIMAGELAYERS} handleClick={handleClick} classIdentifier='human-thumbnail' gender={gender} age={age}/>

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