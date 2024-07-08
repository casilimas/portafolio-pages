import "../App.css"; // Importa tus estilos CSS
import foto from '/images/fotoPerfil.png'; // Importa la foto
import linkedinIcon from '/images/linkedin.png';
import instagramIcon from '/images/Instagram.jpg';
import nodeCertificado from '/images/nodeCertificado.png'; // Importa el certificado de Node
import reactCertificado from '/images/reactCertificado.png'; // Importa el certificado de React

const Curriculum = () => {
  return (
    <div>
      <h1 className="palabrabajobarra">Curriculum</h1>
      <div className="caja-azul">
        <img src={foto} alt="Foto de Freddy Casilimas" className="foto-perfil" /> {/* Foto de perfil */}
        <h3 className="nombre-caja-azul">Freddy Casilimas</h3> {/* H3 con el nombre */}
        <h4 className="profesion-caja-azul">Desarrollador web</h4> {/* H4 con la profesión */}
        <a
          href="https://www.linkedin.com/in/freddy-casilimas-38116314b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
        </a>

        <a
          href="https://www.instagram.com/freddycasilimas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className="instagram-icon" />
        </a>

        <a href="https://casilimas.github.io/portafolio-pages/curriculun.pdf" download className="boton-descargar-cv">
          Descargar CV
        </a>
      </div>

      <div className="caja-blanca">
        <embed src="https://casilimas.github.io/portafolio-pages/curriculun.pdf" className="cv" type="application/pdf" />

        <div className="certificaciones">
          <h2 className="titulo-certificaciones">Certificaciones</h2>
          <div className="certificaciones-imagenes">
            <img src={nodeCertificado} alt="Certificado de Node.js" className="certificado-node" />
            <h3 className="certificado-nodejs"><a href="https://www.udemy.com/certificate/UC-f51b301c-068b-4c15-b874-34d6b8b21fd2/" target="_blank" rel="noopener noreferrer">Certificado de Node.js en Udemy</a></h3>
            <img src={reactCertificado} alt="Certificado de React" className="certificado-react" />
            <h3 className="certificado-reactvite"><a href="https://www.udemy.com/certificate/UC-f51b301c-068b-4c15-b874-34d6b8b21fd2/" target="_blank" rel="noopener noreferrer">Certificado de React en Udemy</a></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
