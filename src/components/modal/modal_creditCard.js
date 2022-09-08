import { motion } from 'framer-motion';
import Backdrop from './backdrop';
import { Button, Row, Col, Input, Container } from 'reactstrap';
import Drop from '../Dropdown';

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

const CreditCardModal = ({ handleClose, cartItems, total}) => {




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
                        <h3>Add Credit Card</h3>
                    </Row>
                    <Row className='form-input mt-3'>
                        <Drop />
                    </Row>
                    <Row className='form-input'>
                        <Input placeholder='Card Number'/>
                    </Row>
                    <Row className='form-input'>
                        <Col md='6' className='p-0 me-md-2 my-md-0'>
                            <Input type='date'/>
                        </Col>
                        <Col className='p-0 ms-md-2 my-md-0 mt-3'>
                            <Input placeholder='CVV (3 digits)'/>
                        </Col>
                    </Row>
                    <Row className='form-input'>
                        <Input placeholder="Cardholder's name"/>
                    </Row>

                    <Row className='form-input'>
                        <Col className='text-center ms-0 ps-0'>
                            <Button onClick={handleClose} className='button__bgGray w-100'>Save</Button>
                        </Col>
                        <Col className='text-center pe-0 me-0'>
                            <Button onClick={handleClose} className='button__bgGray w-100'>Cancel</Button>
                        </Col>
                    </Row>


            </motion.div>
        </Backdrop>
     );
}
 
export default CreditCardModal;