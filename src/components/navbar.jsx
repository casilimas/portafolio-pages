import { Link } from 'react-router-dom';
import homeImage from '/images/home.png'; // Importa la imagen
import curriculumImage from '/images/curriculum.jpg'; // Importa la imagen
import portafolioImage from '/images/portalolio.png'; // Importa la imagen
import blockImage from '/images/block.png'; // Importa la imagen
import contactoImage from '/images/contacto.png'; // Importa la imagen
import sobreMiImage from '/images/sobremi.png'; // Importa la imagen
import '../navbar.css'; 

const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <img src={homeImage} alt="Home" className="nav-image" />
            <span className="tooltip">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/curriculum" className="nav-link">
            <img src={curriculumImage} alt="Curriculum" className="nav-image" />
            <span className="tooltip">Curriculum</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portafolio" className="nav-link">
            <img src={portafolioImage} alt="Portafolio" className="nav-image" />
            <span className="tooltip">Portafolio</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/block" className="nav-link">
            <img src={blockImage} alt="Block" className="nav-image" />
            <span className="tooltip">Block</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link">
            <img src={contactoImage} alt="Contacto" className="nav-image" />
            <span className="tooltip">Contacto</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sobremi" className="nav-link">
            <img src={sobreMiImage} alt='Sobre Mi' className='nav-image' />
            <span className="tooltip">Sobre Mi</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
