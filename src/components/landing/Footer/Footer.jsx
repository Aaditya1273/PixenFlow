import FadeContent from '../../../content/Animations/FadeContent/FadeContent';
import NewLogo from '../../../assets/logos/new-logo.svg';
import './Footer.css';

const Footer = () => {
  return (
    <FadeContent>
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src={NewLogo} alt="Pixen Flow" className="footer-logo" />
            <p className="footer-copyright"> {new Date().getFullYear()} Pixen Flow</p>
          </div>
        </div>
      </footer>
    </FadeContent>
  );
};

export default Footer;