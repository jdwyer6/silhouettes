import { motion } from 'framer-motion';
import Backdrop from './backdrop';
import { Button, Row } from 'reactstrap';
import CartItem from './cartItem';
import { useEffect } from 'react';

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

const Modal_Cart = ({ closeCartModal, cartItems, setCartItems, openCheckoutModal, setTotal, total, otherPetSelection}) => {

    let price;
    let subTotal = 0;
    let shipping = 0;
    let tax = 0; 
    let itemIndex = 0;
    let tempTotal = 0;

    useEffect(() => {
        console.log(total)
        setTotal(tempTotal)
    }, [tempTotal])
    


    function handleOpenCheckout(){
        openCheckoutModal();
        closeCartModal()
        // setCheckoutModalOpen(true);
        // setTotal((subTotal + tax + shipping).toFixed(2))
  
    }

    return ( 
        <Backdrop onClick={closeCartModal}>
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
                <Row>

                    {cartItems.map((item, index) => {
                        price = item.price
                        subTotal += item.price
                        shipping += item.price * .08
                        tax += item.price * .0925
                        itemIndex = index
                        return <CartItem 
                        key={index} 
                        itemIndex={itemIndex} 
                        humanSelection={item.humanSelection} 
                        dogSelection={item.dogSelection} 
                        BGSelection={item.BGSelection} 
                        price={price} 
                        cartItems={cartItems} 
                        setCartItems={setCartItems} 
                        otherPetSelection={otherPetSelection}
                        />
                    })}
                         
                        

                </Row>
                <p className='my-0'>Sub Total: ${subTotal}</p>
                <p className='my-0'>Shipping: ${shipping.toFixed(2)}</p>
                <p className='my-0'>Tax: ${tax.toFixed(2)}</p>
                <p className='fw-bold'>Total: ${(subTotal + tax + shipping).toFixed(2)}</p>
                {tempTotal = (subTotal + tax + shipping).toFixed(2)}
                <Button onClick={closeCartModal} className='button__bgTransparent my-1'>Continue Shopping</Button>
                <Button onClick={openCheckoutModal} className='button__bgGray w-50 my-1'>Check Out</Button>
            </motion.div>
        </Backdrop>
     );
}
 
export default Modal_Cart;