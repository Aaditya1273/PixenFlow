import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../common/Misc/SVGComponents';
import './DisplayHeader.css';

const DisplayHeader = ({ activeItem }) => {
  const navRef = useRef(null);

  return (
    <header className="header">
      <div className='header-container'>
        <Link to="/" className="logo">
          <Logo />
          <span className="logo-text">Pixen Flow</span>
        </Link>

        <div className="nav-cta-group">
          <nav className="landing-nav-items" ref={navRef}>
            <Link 
              className={`nav-link ${activeItem === 'home' ? 'active-link' : ''}`} 
              to="/"
            >
              Home
            </Link>
            <Link 
              className={`nav-link ${activeItem === 'docs' ? 'active-link' : ''}`} 
              to="/text-animations/split-text"
            >
              Docs
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default DisplayHeader;