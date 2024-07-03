import "../App.css"; // Importa tus estilos CSS
import imagenCompass from "/images/portadaApi.png";
import linkedinIcon from '/images/linkedin.png';



import instagramIcon from '/images/Instagram.jpg';
import foto from '/images/fotoPerfil.png'; // Importa la foto
import imagenBackend from "/images/backend.png"; // Importa la imagen para el backend

const Portafolio = () => {
  return (
    <div>
      <h1 className="palabrabajobarra">Portafolio</h1>
      <div className="caja-azul">
        <img src={foto} alt="Foto de Freddy Casilimas" className="foto-perfil" /> {/* Foto de perfil */}
        <h3 className="nombre-caja-azul">Freddy Casilimas</h3> {/* H3 con el nombre */}
        <h4 className="profesion-caja-azul">Desarrollador web</h4> {/* H4 con la profesión */}
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



        <a href="/curriculun.pdf" download className="boton-descargar-cv">
          Descargar CV
        </a>



      </div>
      <div className="caja-blanca">
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
          <a href="https://tu-dominio-github-pages" target="_blank" rel="noopener noreferrer">
            <img src={imagenCompass} alt="MongoCompass" className="mongocompass" />
          </a>
        </div>
        <div className="imagen-backend">
          <a href="https://tu-dominio-github-pages" target="_blank" rel="noopener noreferrer">
            <img src={imagenBackend} alt="Backend" className="backend-image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;



