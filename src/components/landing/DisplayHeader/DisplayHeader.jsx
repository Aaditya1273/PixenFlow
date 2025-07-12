import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../common/Misc/SVGComponents';

import './DisplayHeader.css';
import { gsap } from 'gsap';

const DisplayHeader = ({ activeItem }) => {
  const headerRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    // Header animation on load
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
    
    // Scroll effect for header
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        headerRef.current.classList.add('header-scrolled');
      } else {
        headerRef.current.classList.remove('header-scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header" ref={headerRef}>
            <div className='header-container'>
        <Link to="/" className="logo">
          <Logo />
          <span className="logo-text"></span>
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
              Components
            </Link>
            {/* Removing the Showcase link */}
          </nav>
          
          <Link to="/text-animations/split-text" className="header-cta-button">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DisplayHeader;