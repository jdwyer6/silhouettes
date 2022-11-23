import './App.scss';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal_Cart from './components/modal/Modal_Cart';
import Modal_Checkout from './components/modal/Modal_checkout';
import CreditCardModal from './components/modal/modal_creditCard';
import AddressModal from './components/modal/modal_address';
import OtherPets from './pages/OtherPets';

function App() {

    const shippingCost = .08;
    const taxCost = .0925;

    const [humanSelection, setHuman] = useState(0)
    const [dogSelection, setDog] = useState(0)
    const [BGSelection, setBG] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)
    const [cartModalOpen, setCartModalOpen] = useState(false);
    const closeCartModal = () => setCartModalOpen(false);
    const openCartModal = () => setCartModalOpen(true);



    return (
        <div className="App">

            <Header 
                cartItems={cartItems} 
                openCartModal = {openCartModal}
                cartModalOpen = {cartModalOpen}
                closeCartModal={closeCartModal}
            />
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='create' element={<CreatePage 
                    setHuman={setHuman} 
                    humanSelection={humanSelection} 
                    setDog={setDog} 
                    dogSelection={dogSelection} 
                    setBG={setBG} 
                    BGSelection={BGSelection} 
                    setCartItems={setCartItems} 
                    cartItems={cartItems}
                    setTotal={setTotal}
                    total={total}
                    openCartModal = {openCartModal}
                    cartModalOpen = {cartModalOpen}
                    closeCartModal={closeCartModal}
                    />}
                />
            </Routes>
            
        </div>


    );
}

export default App;
