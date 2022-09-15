import { Button, Row, Col } from 'reactstrap';
import { HUMANIMAGELAYERS } from '../../shared/HUMANIMAGELAYERS';
import { DOGIMAGELAYERS } from '../../shared/DOGIMAGELAYERS';
import { BACKGROUNDIMAGES } from '../../shared/BACKGROUNDIMAGES';
import { OTHERPETS } from '../../shared/OTHERPETS';
import blankCanvas from '../../assets/images/background/blankCanvas.jpg';
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ humanSelection, dogSelection, BGSelection, otherPetSelection, price, itemIndex, cartItems, setCartItems}) => {
    
    let humanImage = ''
    let dogImage = ''
    let otherPetImage = ''
    let BGImage = ''

 
    HUMANIMAGELAYERS.forEach(img => {
        if(img.id == humanSelection.humanSelection){
            humanImage = img.image
            return
        }
    }); 

    if(dogSelection !== null){
        DOGIMAGELAYERS.forEach(img => {
            if(img.id == dogSelection.dogSelection){
                dogImage = img.image
                return
            }
        }); 
    }



    BACKGROUNDIMAGES.forEach(img => {
        if(img.id == BGSelection.BGSelection){
            BGImage = img.image
            return
        }
    }); 

    if(otherPetSelection !== null){
        OTHERPETS.forEach(img => {
            if(img.id == otherPetSelection){
                otherPetImage = img.image
                return
            }
        }); 
    }



    function deleteItem(){
        const newCartItems = cartItems.filter((item, index) => { return index !== itemIndex})

        setCartItems(newCartItems)

    }

    
    return ( 
        <Row className='cart-item-container d-flex justify-content-evenly mt-3'>
            <Col md='3' className='d-flex justify-content-center cart-preview-container cart-item-container__cart-col'>
                <img src={blankCanvas} alt='blank-canvas' className='cart-preview-container__blankCanvas'></img>
                <img src={BGImage} alt="default-image" className='cart-preview-container__previewBackground'></img>
                <img src={humanImage} alt='human-image' className='cart-preview-container__previewHuman'></img>
                {dogSelection !== null ? (
                    <img src={dogImage} alt='dog-image' className='cart-preview-container__previewDog'></img>
                ):(
                    <img src={otherPetImage} alt='pet-image' className='cart-preview-container__previewDog'></img>
                )}
                
            </Col>
            <Col md='3' className='d-flex justify-content-center mt-3 mt-md-0 cart-item-container__cart-col'>
                <h5>20'' x 20'' Canvas</h5>
            </Col>
            <Col md='3' className='d-flex justify-content-center'>
                <p>Price: {price}</p>
            </Col>
            <Col md='3' className='d-flex justify-content-center'>
                <Button className='button__small' onClick={deleteItem}><FaTrashAlt /></Button>    
                
            </Col>
        </Row>
     );
}
 
export default CartItem;