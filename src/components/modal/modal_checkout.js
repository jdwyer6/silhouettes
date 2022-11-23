import { motion } from 'framer-motion';
import Backdrop from './backdrop';
import { Button, Row } from 'reactstrap';
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';
import { useEffect, useState } from 'react';

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

const Modal_checkout = ({ closeCheckoutModal, cartItems, setCartItems, total, openAddressModal, addressInfo}) => {
    
    const paypal = useRef()
    const [paypalRendered, setPaypalRendered] = useState(false);

    function handleSubmitOrder(){
        setCartItems([])
        toast.success("Thank you for your order", {position: toast.POSITION.TOP_CENTER});
        closeCheckoutModal();
    }

    useEffect(()=>{

        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Awesome portrait",
                            amount: {
                                currency_code: "USD",
                                value: JSON.parse(total)
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order)
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
        console.log('render')
        

    }, [])

    return ( 

        <Backdrop onClick={closeCheckoutModal}>
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
                 <div ref={paypal}></div>
   

                
            </motion.div>
        </Backdrop>
     );
}
 
export default Modal_checkout;