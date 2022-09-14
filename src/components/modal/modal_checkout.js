import { motion } from 'framer-motion';
import Backdrop from './backdrop';
import { Button, Row } from 'reactstrap';
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const Modal = ({ handleClose, cartItems, setCartItems, total, openAddressModal, openCreditCardModal, creditCardInfo, addressInfo}) => {


    function addCreditCard(){
        openCreditCardModal();
        handleClose();

    }

    function addShippingAddress(){
        openAddressModal()
        handleClose();
    }

    function handleSubmitOrder(){
        setCartItems([])
        toast.success("Thank you for your order", {position: toast.POSITION.TOP_CENTER});
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
                {Object.keys(creditCardInfo).length === 0 ? (
                    <Button onClick={addCreditCard} className='button__bgTransparent w-30 my-1'>Add Credit Card</Button>
                ) : (
                <p><FaCheckCircle style={{color:'green'}}/> Credit Card Added </p>
                )}

                {Object.keys(addressInfo).length === 0 ? (
                    <Button onClick={addShippingAddress} className='button__bgTransparent my-1'>Add Shipping Address</Button>
                ) : (
                    <p><FaCheckCircle style={{color:'green'}}/> Shipping Address Added </p>
                )}
                
                <Button onClick={handleSubmitOrder} className='button__bgGray w-50 my-1'>Place Order</Button>
            </motion.div>
        </Backdrop>
     );
}
 
export default Modal;