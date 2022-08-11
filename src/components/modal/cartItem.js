import { Button, Row, Col } from 'reactstrap';
import { HUMANIMAGELAYERS } from '../../shared/HUMANIMAGELAYERS';
import { DOGIMAGELAYERS } from '../../shared/DOGIMAGELAYERS';
import { BACKGROUNDIMAGES } from '../../shared/BACKGROUNDIMAGES';
import blankCanvas from '../../assets/images/background/blankCanvas.jpg';

const CartItem = ({ humanSelection, dogSelection, BGSelection, price}) => {
    
    let humanImage = ''
    let dogImage = ''
    let BGImage = ''
 
    HUMANIMAGELAYERS.forEach(img => {
        if(img.id == humanSelection.humanSelection){
            humanImage = img.image
            return
        }
    }); 

    DOGIMAGELAYERS.forEach(img => {
        if(img.id == dogSelection.dogSelection){
            dogImage = img.image
            return
        }
    }); 

    BACKGROUNDIMAGES.forEach(img => {
        if(img.id == BGSelection.BGSelection){
            BGImage = img.image
            return
        }
    }); 



    
    return ( 
        <Row className='cart-item-container d-flex justify-content-evenly mt-3'>
        <Col md='5' className='d-flex justify-content-center cart-preview-container cart-item-container__cart-col'>
            <img src={blankCanvas} alt='blank-canvas' className='cart-preview-container__blankCanvas'></img>
            <img src={BGImage} alt="default-image" className='cart-preview-container__previewBackground'></img>
            <img src={humanImage} alt='human-image' className='cart-preview-container__previewHuman'></img>
            <img src={dogImage} alt='dog-image' className='cart-preview-container__previewDog'></img>
        </Col>
        <Col md='6' className='d-flex justify-content-end cart-item-container__cart-col'>
            <h5>20'' x 20'' Canvas</h5>
            <p>Price: {price}</p>
        </Col>
        <Col md='1'>
            <Button>x</Button>    
        </Col>
    </Row>
     );
}
 
export default CartItem;