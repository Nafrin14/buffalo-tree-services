import heroImage from "../assets/images/Hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="min-h-[90vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.55),
          rgba(0, 0, 0, 0.55)
        ), url(${heroImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-white text-center md:text-left">
        <h1
          id="hero-title"
          className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-3xl leading-tight mx-auto md:mx-0"
        >
          Professional Tree Removal &amp; Tree Care Services
        </h1>

        <p className="mt-6 text-base md:text-lg max-w-2xl text-gray-200 mx-auto md:mx-0">
          Safe, reliable, and affordable tree services for your home or
          business. We care for your trees like our own.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <Link
            to="/contact"
            aria-label="Request a free tree service estimate"
            className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 transition w-full sm:w-auto text-center"
          >
            Get Free Estimate
          </Link>

          <a
            href="tel:+17162001550"
            aria-label="Call Buffalo Tree Service at plus one 716 200 1550"
            className="border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-700 focus:outline-none focus:ring-4 focus:ring-white transition w-full sm:w-auto text-center"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;