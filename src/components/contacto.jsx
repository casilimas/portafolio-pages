import { useState, useEffect } from "react";
import "../App.css"; 
import linkedinIcon from '/images/linkedin.png';
import instagramIcon from '/images/Instagram.jpg';
import retornoIcon from '/images/retorno.jpg'; 
import foto from '/images/fotoPerfil.png'; // Importa la foto




const Contacto = () => {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = '23456789abcdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ';
    let captcha = '';
    for (let i = 0; i < 7; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(captcha);
  };

  const validateCaptcha = () => {
    if (userInput === captcha) {
      setIsCaptchaValid(true);
    } else {
      alert('El código ingresado es incorrecto. Inténtelo de nuevo.');
    }
  };

  return (
    <div>
      <h1 className="palabrabajobarra">Contacto</h1>
      <div className="caja-azul">
      <img src={foto} alt="Foto de Freddy Casilimas" className="foto-perfil" /> {/* Foto de perfil */}
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
        <a href="/curriculun.pdf" download className="boton-descargar-cv">
          Descargar CV
        </a>
      </div>

      <div className="caja-blanca">
        <div className="titulo-contacto-contacto"><h1>Contacto</h1></div>
        <div className="contact-form">
          <form id="captcha-form" onSubmit={(e) => e.preventDefault()}>
            <div className="captcha-container">
              <label className="no-select" id="captcha-label" >{captcha}</label>
              <input 
                className="input"
                type="text" 
                id="captcha-input" 
                placeholder="Ingrese el código"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                required 
              />
              <button className="boton-enviar" type="button" id="captcha-button" onClick={validateCaptcha}>Enviar</button>
              <div className="ubi-boton-icon">
              <button className="icon-button" type="button" id="new-captcha-button" onClick={generateCaptcha} >
                <img src={retornoIcon} alt="Generar nuevo código" className="icon-image"/>
              </button>
              </div>
            </div>
          </form>
          {isCaptchaValid && (
            <div className="correo-desplegado" id="email-container">
              <p>Mi correo es: <span id="email">casilimasf30@gmail.com</span></p>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacto;
