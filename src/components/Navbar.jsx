
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
import Albert from '../assets/img/Albert_Cortes.png';
function Navbar () {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/"> <img src={Albert} alt="Logo" /> </Link>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <NavLink to="/AcercaDeMi">Acerca de mí</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/proyectos">Proyectos</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;