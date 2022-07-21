import './App.scss';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import CreatePage from './pages/CreatePage';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='create' element={<CreatePage />}/>
            </Routes>
            
        </div>


    );
}

export default App;
