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

const CreditCardModal = ({ closeCreditCardModal, setCreditCardInfo, openCheckoutModal}) => {

    let type = '';
    let number = '';
    let expiration;
    let cvv = '';
    let name = '';

    function handleSubmit(){
        setCreditCardInfo({
            type: {type},
            number: {number},
            expiration: {expiration},
            cvv: {cvv},
            name: {name}
        })

        openCheckoutModal();
        closeCreditCardModal();
    }


    return ( 
        <Backdrop onClick={closeCreditCardModal}>
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
                        <Input placeholder='Card Number' onChange={(e)=> number = e.target.value}/>
                    </Row>
                    <Row className='form-input'>
                        <Col md='6' className='p-0 me-md-2 my-md-0'>
                            <Input type='date' onChange={(e)=> expiration = e.target.valueAsDate}/>
                        </Col>
                        <Col className='p-0 ms-md-2 my-md-0 mt-3'>
                            <Input placeholder='CVV (3 digits)' onChange={(e)=> cvv = e.target.value}/>
                        </Col>
                    </Row>
                    <Row className='form-input'>
                        <Input placeholder="Cardholder's name" onChange={(e)=> name = e.target.value}/>
                    </Row>

                    <Row className='form-input'>
                        <Col className='text-center ms-0 ps-0'>
                            <Button onClick={handleSubmit} className='button__bgGray w-100'>Save</Button>
                        </Col>
                        <Col className='text-center pe-0 me-0'>
                            <Button onClick={closeCreditCardModal} className='button__bgGray w-100'>Cancel</Button>
                        </Col>
                    </Row>


            </motion.div>
        </Backdrop>
     );
}
 
export default CreditCardModal;