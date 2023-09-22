import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  const facebookLink = 'https://www.facebook.com/TuPagina';
  const twitterLink = 'https://twitter.com/TuCuenta';
  const instagramLink = 'https://www.instagram.com/TuCuenta/';
  const linkedinLink = 'https://www.linkedin.com/in/TuPerfilLinkedIn/';
  const email = 'alabertus@gmail.com';

  return (
      <footer className="footer">
        <div className="footer-logo">
        <Link to="/"><img src="public/img/Albert_Cortes(2).png" alt="Logo" /></Link>
        </div>
        <div>
        <p>&copy; 2023 Albert Cortés Ventura</p>
        <p><a href={`mailto:${email}`}>{email}</a></p>
        </div>
        
        <div className="social-icons">
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </footer>
  );
}

export default Footer;
