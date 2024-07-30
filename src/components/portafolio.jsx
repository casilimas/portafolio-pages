import "../App.css"; 
import imagenCompass from "/images/portadaApi.png";
import linkedinIcon from '/images/linkedin.png';
import instagramIcon from '/images/Instagram.jpg';
import foto from '/images/fotoPerfil.png'; 
import imagenBackend from "/images/backend.png"; 
import apiDogar from '/images/apiDogar.png'; 

const Portafolio = () => {
  return (
    <div>
      <h1 className="palabrabajobarra">Portafolio</h1>
      <div className="caja-azul">
        <img src={foto} alt="Foto de Freddy Casilimas" className="foto-perfil" /> 
        <h3 className="nombre-caja-azul">Freddy Casilimas</h3> 
        <h4 className="profesion-caja-azul">Desarrollador web</h4> 
        <a
          href="https://www.linkedin.com/in/freddy-casilimas-38116314b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="linkedin-icon"
          />
        </a>
        <a
          href="https://www.instagram.com/freddycasilimas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagramIcon}
            alt="Instagram"
            className="instagram-icon"
          />
        </a>

        <a href="https://casilimas.github.io/portafolio-pages/curriculun.pdf" download className="boton-descargar-cv">
          Descargar CV
        </a>
      </div>
      <div className="caja-blanca">
      <div className="imagen-api-dogar">
          <a href="https://casilimas.github.io/Rotacion-Auxiliares/" target="_blank" rel="noopener noreferrer">
            <img src={apiDogar} alt="Rotacion Auxiliares" className="api-dogar-image" />
          </a>
        </div>
        <div className="imagenUno">
          <iframe
            width="583"
            height="315"
            src="https://www.youtube.com/embed/1C3QJhDtZMo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <a href="https://casilimas.github.io/front-pages/" target="_blank" rel="noopener noreferrer">
            <img src={imagenCompass} alt="MongoCompass" className="mongocompass" />
          </a>
        </div>
        <div className="imagen-backend">
          <a href="https://github.com/casilimas/Back-api" target="_blank" rel="noopener noreferrer">
            <img src={imagenBackend} alt="Backend" className="backend-image" />
          </a>
        </div>
       
        
      </div>
    </div>
  );
};

export default Portafolio;
