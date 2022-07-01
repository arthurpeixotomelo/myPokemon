import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pokemons from './pages/Pokemons';
import Header from './components/Header';


export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemons' element={<Pokemons />} />
      </Routes>
    </HashRouter>
  )
}
