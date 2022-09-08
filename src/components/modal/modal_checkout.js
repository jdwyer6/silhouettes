import { motion } from 'framer-motion';
import Backdrop from './backdrop';
import { Button, Row } from 'reactstrap';

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

const Modal = ({ handleClose, cartItems, total, closeCreditCardModal, openCreditCardModal}) => {


    function addCreditCard(){
        openCreditCardModal();
        handleClose();

    }

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
                    <h3>Checkout</h3>
                </Row>
                <Row>
                    {cartItems.length} item(s) in cart
                </Row>

                <p className='fw-bold'>Total: ${(total)}</p>
                <Button onClick={addCreditCard} className='button__bgTransparent w-30 my-1'>Add Credit Card</Button>

                {/* <Form className={cartItems.length > 0 ? ('d-none'):('small')}>
                    Text
                </Form> */}
                <Button className='button__bgTransparent w-30 my-1'>Add Shipping Address</Button>
                <Button onClick={handleClose} className='button__bgGray w-30 my-1'>Place Order</Button>
            </motion.div>
        </Backdrop>
     );
}
 
export default Modal;