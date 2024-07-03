import "../App.css"; // Importa tus estilos CSS
import foto from '/images/fotoPerfil.png'; // Importa la foto
import linkedinIcon from '/images/linkedin.png';
import instagramIcon from '/images/Instagram.jpg';

const Home = () => {
  return (
    <div>
      <h1 className="palabrabajobarra">Home</h1>
      <div className="caja-azul">
      <img src={foto} alt="Foto de Freddy Casilimas" className="foto-perfil" /> {/* Foto de perfil */}
        <h3 className="nombre-caja-azul">Freddy Casilimas</h3>{" "}
        <h4 className="profesion-caja-azul">Desarrollador web</h4>{" "}
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
        <h1 className="nombre-caja-blanca">Freddy Casilimas</h1>
        <h2 className="profesion-caja-blanca">Desarrollador Web</h2>
      </div>
    </div>
  );
};

export default Home;
