import { useEffect, useState } from "react";

import Footer from "../components/landing/Footer/Footer";
import PlasmaWaveV2 from "../components/landing/PlasmaWave/PlasmaWaveV2";
import Hero from "../components/landing/Hero/Hero";
import Aurora from "../components/landing/Aurora/Aurora";
import heroImage from "../assets/common/hero.webp";


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
      <title>Pixen Flow - Animated UI/UX Components For React</title>

      <Aurora 
        colorStops={["#5227FF", "#ff8c00", "#5227FF"]} 
        amplitude={1.2} 
        blend={0.6}
      />

      <Hero />
      <Footer />
    </section>
  );
};

export default LandingPage;
