

import "../App.css"; // Importa tus estilos CSS
import foto from '/images/fotoPerfil.png'; // Importa la foto
import linkedinIcon from '/images/linkedin.png';
import instagramIcon from '/images/Instagram.jpg';

const curriculum = () => {
  return (
    <div>
      <h1 className="palabrabajobarra">Curriculum</h1>
      <div className="caja-azul">
      <img src={foto} alt="Foto de Freddy Casilimas" className="foto-perfil" /> {/* Foto de perfil */}
        <h3 className="nombre-caja-azul">Freddy Casilimas</h3>{" "}
        {/* H3 con el nombre */}
        <h4 className="profesion-caja-azul">Desarrollador web</h4>{" "}
        {/* H4 con la profesión */}
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
        <embed src="https://casilimas.github.io/portafolio-pages/curriculun.pdf" className="cv" type="application/pdf" />
      </div>






      
    </div>
  );
};

export default curriculum;


//    C:\Users\fredd_\portafolioUno\PortafolioDesarrollo\Portafolio\public\curriculun.pdf
