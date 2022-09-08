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

const AddressModal = ({ closeAddressModal, setAddressInfo, openCheckoutModal}) => {

    let name = '';
    let street = '';
    let city = '';
    let zip = '';

    function handleSubmit(){
        setAddressInfo({
            name: {name},
            street: {street},
            city: {city},
            zip: {zip}
        })
        
        openCheckoutModal();
        closeAddressModal();
    }


    return ( 
        <Backdrop onClick={closeAddressModal}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal"    
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit">

                    <Row className='mt-3'>
                        <h3>Add Shipping Address</h3>
                    </Row>
                    <Row className='form-input'>
                        <Input placeholder="Customer's Name" onChange={(e)=> name = e.target.value}/>
                    </Row>
                    <Row className='form-input'>
                        <Input placeholder="Shipping Address" onChange={(e)=> street = e.target.value}/>
                    </Row>
                    <Row className='form-input'>
                        <Col md='6' className='p-0 me-md-2 my-md-0'>
                            <Input placeholder='City' onChange={(e)=> city = e.target.value}/>
                        </Col>
                        <Col className='p-0 ms-md-2 my-md-0 mt-3'>
                            <Input placeholder='Zip' onChange={(e)=> zip = e.target.value}/>
                        </Col>
                    </Row>

                    <Row className='form-input'>
                        <Col className='text-center ms-0 ps-0'>
                            <Button onClick={handleSubmit} className='button__bgGray w-100'>Save</Button>
                        </Col>
                        <Col className='text-center pe-0 me-0'>
                            <Button onClick={closeAddressModal} className='button__bgGray w-100'>Cancel</Button>
                        </Col>
                    </Row>


            </motion.div>
        </Backdrop>
     );
}
 
export default AddressModal;