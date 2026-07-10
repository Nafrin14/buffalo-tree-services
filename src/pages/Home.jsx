import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/CTASection";

function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <Testimonials />
      <BlogSection />
      <CTASection />
    </>
  );
}

export default Home;