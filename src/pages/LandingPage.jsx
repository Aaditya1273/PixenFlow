import { lazy, Suspense, useEffect } from "react";
import useIsMobile from "../hooks/useIsMobile";
import Footer from "../components/landing/Footer/Footer";
import Hero from "../components/landing/Hero/Hero";

const Aurora = lazy(() => import("../components/landing/Aurora/Aurora"));

const LandingPage = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="landing-wrapper">
      <title>Pixen Flow - Animated UI/UX Components For React</title>

      <Suspense fallback={null}>
        {!isMobile && (
          <Aurora 
            colorStops={["#5227FF", "#ff8c00", "#5227FF"]} 
            amplitude={1.2} 
            blend={0.6}
          />
        )}
      </Suspense>

      <Hero />
      <Footer />
    </section>
  );
};

export default LandingPage;
