import { motion } from 'framer-motion';
import Backdrop from './backdrop';
import { Button, Row, Col } from 'reactstrap';
import { HUMANIMAGELAYERS } from '../../shared/HUMANIMAGELAYERS';
import { DOGIMAGELAYERS } from '../../shared/DOGIMAGELAYERS';
import { BACKGROUNDIMAGES } from '../../shared/BACKGROUNDIMAGES';
import blankCanvas from '../../assets/images/background/blankCanvas.jpg';

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 30,
            stiffness: 500
        }
    },
    exit: {
        y: '100vh',
        opacity: 0,
    }
}

const Modal = ({ handleClose, humanSelection, dogSelection, BGSelection}) => {
    return ( 
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal"    
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit">
                <Row className='mt-3'>
                    <h3>Cart</h3>
                </Row>
                <Row className='cart-item-container d-flex justify-content-evenly mt-3'>
                    <Col md='6' className='d-flex justify-content-center cart-preview-container cart-item-container__cart-col'>
                        <img src={blankCanvas} alt='blank-canvas' className='cart-preview-container__blankCanvas'></img>
                        <img src={BACKGROUNDIMAGES[BGSelection].image} alt="default-image" className='cart-preview-container__previewBackground'></img>
                        <img src={HUMANIMAGELAYERS[humanSelection].image} alt='human-image' className='cart-preview-container__previewHuman'></img>
                        <img src={DOGIMAGELAYERS[dogSelection].image} alt='dog-image' className='cart-preview-container__previewDog'></img>
                    </Col>
                    <Col md='6' className='d-flex justify-content-end cart-item-container__cart-col'>
                        <h5>20'' x 20'' Canvas</h5>
                    </Col>
                </Row>
                <p>Total: $29.99</p>
                <Button onClick={handleClose} className='button__bgTransparent w-30 my-1'>Continue Shopping</Button>
                <Button onClick={handleClose} className='button__bgGray w-30 my-1'>Check Out</Button>
            </motion.div>
        </Backdrop>
     );
}
 
export default Modal;