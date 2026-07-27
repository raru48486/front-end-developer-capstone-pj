import NavBar from './components/navbar';
import Home from './pages/home';
import Reservations from './pages/reservations';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </>
  );
}

export default App;
