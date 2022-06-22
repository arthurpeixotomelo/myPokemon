import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pokemons from './pages/Pokemons';
import Contato from './pages/Contato';
import Header from './components/Header';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}
