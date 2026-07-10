import { Link } from "react-router-dom";
import aboutImage from "../assets/images/about.jpg";

function AboutSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        <div>
          <img
            src={aboutImage}
            alt="About Buffalo Tree Service"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>

        <div>
          <p className="text-green-700 font-semibold uppercase tracking-widest">
            About Buffalo Tree Service
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
            Professional Tree Care With Years of Experience
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            Buffalo Tree Service provides safe, reliable, and affordable tree
            services for residential and commercial properties. Our certified
            team specializes in tree removal, trimming, pruning, emergency tree
            services, and land clearing with a strong focus on safety and
            customer satisfaction.
          </p>

          <div className="grid grid-cols-2 gap-5 mb-8">
            <div className="bg-white shadow-md rounded-xl p-5">
              <h3 className="text-3xl font-bold text-green-700">15+</h3>
              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-5">
              <h3 className="text-3xl font-bold text-green-700">1000+</h3>
              <p className="text-gray-600 mt-2">Trees Removed</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-5">
              <h3 className="text-3xl font-bold text-green-700">24/7</h3>
              <p className="text-gray-600 mt-2">Emergency Service</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-5">
              <h3 className="text-3xl font-bold text-green-700">100%</h3>
              <p className="text-gray-600 mt-2">Customer Satisfaction</p>
            </div>
          </div>

          <Link
  to="/about"
  className="inline-block bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition"
>
  Learn More
</Link>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;