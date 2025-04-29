import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BenefitsSec from "./components/BenefitsSec/BenefitsSec";
import AccordionSec from "./components/AccordionSec/AccordionSec";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import NavBar from "./components/NavBar/NavBar";
import SecNavgate from "./components/SecNavgate/SecNavgate";
import TopBanner from "./components/TopBanner/TopBanner";
import TestmonailsSec from "./components/TestmonailsSec/TestmonailsSec";
import { navLinks, logoInfo } from "./data/NavData";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      distance: "50px",
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <>
      <div className="top-section px-50 ">
        <TopBanner />
        <NavBar links={navLinks} logo={logoInfo} />
      </div>
      <HeroComponent />
      <BenefitsSec />
      <TestmonailsSec />
      <AccordionSec />
      <SecNavgate />
      <FooterComponent />
    </>
  );
}

export default App;
