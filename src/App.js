import './App.scss';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal_Cart from './components/modal/modal_cart';
import Modal_Checkout from './components/modal/modal_checkout';
import CreditCardModal from './components/modal/modal_creditCard';

function App() {

    const shippingCost = .08;
    const taxCost = .0925;

    const [humanSelection, setHuman] = useState(0)
    const [dogSelection, setDog] = useState(0)
    const [BGSelection, setBG] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)

    const [modalOpen, setModalOpen] = useState(false);
    const [checkoutModalOpen, setCheckoutModalOpen] = useState(false)
    const [creditCardModalOpen, setCreditCardModalOpen] = useState(false)

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const closeCheckoutModal = () => setCheckoutModalOpen(false);
    const openCheckoutModal = () => setCheckoutModalOpen(true);

    const closeCreditCardModal = () => setCreditCardModalOpen(false);
    const openCreditCardModal = () => setCreditCardModalOpen(true);



    return (
        <div className="App">

            <Header humanSelection={humanSelection} dogSelection={dogSelection} BGSelection={BGSelection} cartItems={cartItems} setCartItems={setCartItems} total={total} setTotal={setTotal} modalOpen={modalOpen} open={open} close={close}/>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='create' element={<CreatePage setHuman={setHuman} 
                    humanSelection={humanSelection} 
                    setDog={setDog} 
                    dogSelection={dogSelection} 
                    setBG={setBG} 
                    BGSelection={BGSelection} 
                    setCartItems={setCartItems} 
                    cartItems={cartItems}
                    modalOpen={modalOpen}
                    open={open}
                    close={close}
                    />}
                    />
            </Routes>

            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                {modalOpen && <Modal_Cart 
                    modalOpen={modalOpen} 
                    handleClose={close} 
                    humanSelection={humanSelection} 
                    dogSelection={dogSelection} 
                    BGSelection={BGSelection} 
                    cartItems={cartItems} 
                    setCartItems={setCartItems} 
                    closeCheckoutModal={closeCheckoutModal} 
                    openCheckoutModal={openCheckoutModal} 
                    setCheckoutModalOpen={setCheckoutModalOpen}
                    checkoutModalOpen={checkoutModalOpen}
                    setTotal={setTotal}
                />}
            </AnimatePresence>

            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                {checkoutModalOpen && <Modal_Checkout checkoutModalOpen={checkoutModalOpen} handleClose={closeCheckoutModal} cartItems={cartItems} setCartItems={setCartItems} total={total} closeCreditCardModal={closeCreditCardModal} openCreditCardModal={openCreditCardModal}/>}
            </AnimatePresence>

            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                {creditCardModalOpen && <CreditCardModal/>}
            </AnimatePresence>
            
        </div>


    );
}

export default App;
