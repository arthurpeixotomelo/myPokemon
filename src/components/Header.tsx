import logo from '../img/logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header() {
  let Active = "underline";
  return (
    <header>
      <img src={logo} alt="Pokemon Logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? Active : undefined}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/pokemons" className={({ isActive }) => isActive ? Active : undefined}>Pokemons</NavLink>
          </li>
          <li>
            <NavLink to="/contato" className={({ isActive }) => isActive ? Active : undefined}>Contato</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}