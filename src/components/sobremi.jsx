import "../App.css"; // Importa tus estilos CSS
import fotoPerfil from "/images/fotoPerfil.png"; // Importa la foto
import linkedinIcon from '/images/linkedin.png';
import instagramIcon from '/images/Instagram.jpg';
import fotoPerfilDos from "/images/ultima.png"; // Importa la foto


const SobreMi = () => {
  return (
    <div>
      <h1 className="palabrabajobarra">Sobre mí</h1>
      <div className="caja-azul">
        <img src={fotoPerfil} alt="Foto de Freddy Casilimas" className="foto-perfil" /> {/* Foto de perfil */}
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
        <a href="https://casilimas.github.io/portafolio-pages/curriculun.pdf" download className="boton-descargar-cv">
          Descargar CV
        </a>
      </div>
      <div className="caja-blanca">
      <img src={fotoPerfilDos} alt="Foto de Freddy Casilimas" className="foto-perfil-dos" />
      <div className="texto-sobremi">
        <h1>Sobre mí</h1>
       
        <h2>Freddy Casilimas</h2>
        <p>
          Soy Desarrollador Web Full Stack con una fuerte pasión por la tecnología y la programación. He adquirido experiencia a través de proyectos personales, utilizando tecnologías como React, Node.js.
        </p>
        <h3>Experiencia Profesional</h3>
        <p>
          Aunque no poseo un título formal en desarrollo web, he trabajado en diversos proyectos que han enriquecido mis habilidades y conocimientos en este campo.
        </p>
        <ul>
          
          <li>
            <strong>Proyecto Personal</strong>: He creado una aplicación de gestión de tareas utilizando React y Node.js, la cual ha sido efectiva en sus pruebas.
          </li>
        </ul>
        <h3>Habilidades</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React</li>
          <li>Node.js, Express</li>
          <li>Python</li>
          
        </ul>
        <h3>Proyectos Destacados</h3>
        <ul>
          <li>
            <strong>Gestor de Tareas</strong>: Aplicación web para gestionar tareas, desarrollada con React y Node.js. [<a href="https://github.com/casilimas" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>]
          </li>
          <li>
            <strong>Portfolio Personal</strong>: Mi sitio web personal, donde muestro mis proyectos y habilidades. [<a href="https://github.com/casilimas" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>]
          </li>
        </ul>
        <h3>Objetivos</h3>
        <p>
          Mi objetivo es seguir desarrollándome como profesional en el campo del desarrollo web, aprendiendo nuevas tecnologías y enfrentando desafíos que me permitan crecer y contribuir al éxito de los proyectos en los que participe.
        </p>
        <h3>Contacto</h3>
        <p>Email: contacto</p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/freddy-casilimas-38116314b/" target="_blank" rel="noopener noreferrer">Freddy Casilimas</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/casilimas" target="_blank" rel="noopener noreferrer">freddycasilimas</a>
        </p>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
