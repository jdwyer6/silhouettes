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

    return (
        <div className="App">
            <Header humanSelection={humanSelection} dogSelection={dogSelection} BGSelection={BGSelection}/>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='create' element={<CreatePage setHuman={setHuman} humanSelection={humanSelection} setDog={setDog} dogSelection={dogSelection} setBG={setBG} BGSelection={BGSelection}/>}/>
            </Routes>
            
        </div>


    );
}

export default App;
