import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Footer from "../components/Footer.jsx";
import About from "../components/About.jsx";
import CaseStudiesSlider from "../components/CaseStudies.jsx";
import CursorFollower from "../components/CursorFollower.jsx";
import Testimonials from "../components/Testimonials.jsx";
import WeOffering from "../components/WeOffering.jsx";
import BlogSection from "../components/BlogSection.jsx";

const Home = () => {
  return (
    <>
      <CursorFollower />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <CaseStudiesSlider/>
      <WeOffering/>
      <BlogSection/>
      <Testimonials/>
      <Footer />
    </>
  );
};

export default Home;
