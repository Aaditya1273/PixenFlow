import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SplitText from "../../../content/TextAnimations/SplitText/SplitText";
import DotGrid from "../../../content/Backgrounds/DotGrid/DotGrid";
import LetterGlitch from "../../../content/Backgrounds/LetterGlitch/LetterGlitch";
import Squares from "../../../content/Backgrounds/Squares/Squares";
import { Box } from "@chakra-ui/react";

const ResponsiveSplitText = ({ isMobile, text, ...rest }) =>
  isMobile ? (
    <span className={rest.className}>{text}</span>
  ) : (
    <SplitText text={text} {...rest} />
  );

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  
  const handleCardClick = (cardName) => {
    setActiveCard(cardName);
    // You could add additional interactions here if needed
    console.log(`${cardName} card clicked`);
    
    // Automatically hide the tooltip after 3 seconds
    setTimeout(() => {
      setActiveCard(null);
    }, 3000);
  };

  return (
    <div className="landing-content">
      <div className="hero-main-content">
        <h1 className="landing-title">
          <ResponsiveSplitText
            isMobile={isMobile}
            text="Stunning UI components"
            className="hero-split"
            splitType="chars"
            delay={30}
            duration={2}
            ease="elastic.out(0.5, 0.3)"
          />
          <br />
          <ResponsiveSplitText
            isMobile={isMobile}
            text="for modern developers"
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
          text="Over 80 production-ready snippets to bring your React projects to life"
        />

        <Link to={"/text-animations/split-text"} className="landing-button">
          <span>Browse Components</span>
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
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>

      {!isMobile && (
        <div className="hero-cards-container">
          <div
            className={`hero-card hero-card-1 ${activeCard === 'DotGrid' ? 'active-card' : ''}`}
            onClick={() => handleCardClick('DotGrid')}
          >
            <Box w="100%" h="100%" position="relative" className="hero-dot-grid">
              <DotGrid
                baseColor="#000000"
                activeColor="rgba(255, 107, 0, 0.9)"
                dotSize={8}
                gap={16}
                proximity={50}
              />
            </Box>
            {activeCard === 'DotGrid' && (
              <div className="card-tooltip">Dot Grid Animation</div>
            )}
          </div>

          <div className="hero-cards-row">
            <div
              className={`hero-card hero-card-2 ${activeCard === 'LetterGlitch' ? 'active-card' : ''}`}
              onClick={() => handleCardClick('LetterGlitch')}
            >
              <LetterGlitch
                className="hero-glitch"
                glitchColors={["#FF6B00", "#FF8C00", "#000000"]}
              />
              {activeCard === 'LetterGlitch' && (
                <div className="card-tooltip">Letter Glitch Animation</div>
              )}
            </div>

            <div
              className={`hero-card hero-card-3 ${activeCard === 'Squares' ? 'active-card' : ''}`}
              onClick={() => handleCardClick('Squares')}
            >
              <Squares
                borderColor="#FF6B00"
                speed={0.2}
                direction="diagonal"
                hoverFillColor="#FF6B00"
              />
              {activeCard === 'Squares' && (
                <div className="card-tooltip">Squares Animation</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
