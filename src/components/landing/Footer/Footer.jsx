import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Particles from '../Particles/Particles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Logo } from '../../common/Misc/SVGComponents';
import { FiInfo, FiStar, FiSettings } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // Animate footer elements
    gsap.fromTo(
      footerRef.current.querySelectorAll('.footer-animate'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
        },
      }
    );
    
    // Animate feature cards with a staggered entrance
    gsap.fromTo(
      footerRef.current.querySelectorAll('.feature-card'),
      { scale: 0.8, opacity: 0, y: 30 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: footerRef.current.querySelector('.feature-cards-row'),
          start: 'top 85%',
        },
      }
    );
    
    // Animate the circular icons with a spin effect
    gsap.fromTo(
      footerRef.current.querySelectorAll('.feature-icon-circle'),
      { rotation: -180, opacity: 0 },
      {
        rotation: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: 'elastic.out(1, 0.3)',
        stagger: 0.15,
        scrollTrigger: {
          trigger: footerRef.current.querySelector('.feature-cards-row'),
          start: 'top 85%',
        },
      }
    );
  }, []);

  const featureCards = [
    {
      icon: <FiInfo size={28} />,
      title: 'Responsive Design',
      description: 'Components that look great on any device, from mobile to desktop.'
    },
    {
      icon: <FiSettings size={28} />,
      title: 'Customizable',
      description: 'Easily adapt components to match your brand\'s unique style and requirements.'
    },
    {
      icon: <FiStar size={28} />,
      title: 'Production Ready',
      description: 'Thoroughly tested components that are ready for your production environment.'
    }
  ];

  return (
    <footer className="landing-footer">
      <Particles
        className="landing-particles"
        particleCount={150}
        particleSpread={12}
        speed={0.1}
        particleColors={["#ff8c00", "#ffffff", "#ffd700"]}
        alphaParticles={true}
        particleBaseSize={2}
        sizeRandomness={0.8}
        cameraDistance={15}
        disableRotation={false}
      />
      <div ref={footerRef}>
        <div className="footer-content">
          <div className="feature-cards-row footer-animate">
            {featureCards.map((card, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-circle">
                  {card.icon}
                </div>
                <h3 className="feature-title">{card.title}</h3>
                <p className="feature-description">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-main">
          <div className="footer-left footer-animate">

                        <div className="footer-logo">
              <Logo />
            </div>
            <div className="footer-tagline">
              Beautiful UI components for React developers
            </div>
            <div className="footer-copyright">
              made with love by Pixen Flow since 2025
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;