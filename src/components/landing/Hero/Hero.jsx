import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SplitText from "../../../content/TextAnimations/SplitText/SplitText";
import { Box } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ResponsiveSplitText = ({ isMobile, text, ...rest }) =>
  isMobile ? (
    <span className={rest.className}>{text}</span>
  ) : (
    <SplitText text={text} {...rest} />
  );

// FeatureCard component removed as requested

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    
    // Animation for hero section
    gsap.fromTo(
      ".hero-main-content",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
    
    // Scroll animations for features section removed as requested
    
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [isMobile]);

  // Features array removed as requested
  const features = [];

  return (
    <>
      <div className="landing-content" ref={heroRef}>
        <div className="hero-main-content">
          <div className="hero-badge">Pixen Flow UI Library</div>
          
          <h1 className="landing-title">
            <ResponsiveSplitText
              isMobile={isMobile}
              text="Elevate Your UI"
              className="hero-split"
              splitType="chars"
              delay={30}
              duration={2}
              ease="elastic.out(0.5, 0.3)"
            />
            <br />
            <ResponsiveSplitText
              isMobile={isMobile}
              text="With Modern Components"
              className="hero-split"
              splitType="chars"
              delay={30}
              duration={2}
              ease="elastic.out(0.5, 0.3)"
            />
          </h1>

          <ResponsiveSplitText
            isMobile={isMobile}
            className="landing-subtitle"
            splitType="words"
            delay={10}
            duration={1}
            text="A premium collection of animated React components to create stunning, interactive user interfaces."
          />

          <div className="hero-buttons">
            <Link to={"/text-animations/text-devider"} className="landing-button primary-button">
              <span>Explore Components</span>
              <div className="button-arrow-circle">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="#4c1d95"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Features section removed as requested */}
    </>
  );
};

export default Hero;
