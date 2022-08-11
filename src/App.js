import './App.scss';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import { useState } from 'react';

function App() {

    const [humanSelection, setHuman] = useState(0)
    const [dogSelection, setDog] = useState(0)
    const [BGSelection, setBG] = useState(0)
    const [cartItems, setCartItems] = useState([])

    return (
        <div className="App">
            <Header humanSelection={humanSelection} dogSelection={dogSelection} BGSelection={BGSelection} cartItems={cartItems} setCartItems={setCartItems}/>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='create' element={<CreatePage setHuman={setHuman} humanSelection={humanSelection} setDog={setDog} dogSelection={dogSelection} setBG={setBG} BGSelection={BGSelection} setCartItems={setCartItems} cartItems={cartItems}/>}/>
            </Routes>
            
        </div>


    );
}

export default App;
