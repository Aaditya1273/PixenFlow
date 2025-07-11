import { useEffect, useState } from "react";

import Footer from "../components/landing/Footer/Footer";
import PlasmaWaveV2 from "../components/landing/PlasmaWave/PlasmaWaveV2";
import Hero from "../components/landing/Hero/Hero";
import heroImage from "../assets/common/hero.webp";

import "../css/landing.css";

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <section className="landing-wrapper">
      <title>Pixen Flow - Animated UI Components For React</title>

      {isMobile && (
        <div className="mobile-hero-background-container">
          <img
            src={heroImage}
            alt="Hero background"
            className="mobile-hero-background-image"
          />
        </div>
      )}

      <PlasmaWaveV2 yOffset={-300} xOffset={100} rotationDeg={-30} />
      <Hero />
      <Footer />
    </section>
  );
};

export default LandingPage;
