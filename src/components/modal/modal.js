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

const Modal = ({ handleClose, text, humanSelection, dogSelection, BGSelection}) => {
    return ( 
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal"    
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit">
                <Row>
                    <h3>Cart</h3>
                </Row>
                <Row>
                    <Col>
                        <img src={blankCanvas} alt='blank-canvas' className='preview-container__blankCanvas'></img>
                        <img src={BACKGROUNDIMAGES[BGSelection].image} alt="default-image" className='preview-container__previewBackground'></img>
                        <img src={HUMANIMAGELAYERS[humanSelection].image} alt='human-image' className='preview-container__previewHuman'></img>
                        <img src={DOGIMAGELAYERS[dogSelection].image} alt='dog-image' className='preview-container__previewDog'></img>
                    </Col>
                </Row>
                <p>{humanSelection}</p>
                <Button onClick={handleClose} className='button__bgTransparent w-25 my-1'>Continue Shopping</Button>
                <Button onClick={handleClose} className='button__bgGray w-25 my-1'>Check Out</Button>
            </motion.div>
        </Backdrop>
     );
}
 
export default Modal;