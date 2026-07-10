import { Link } from "react-router-dom";
function CTASection() {
  return (
    <section className="bg-green-800 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">

        <p className="uppercase tracking-widest text-green-200 font-semibold">
          Get Started Today
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          Need Professional Tree Services?
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-green-100 mb-10">
          Whether you need tree removal, tree trimming, emergency tree services,
          or land clearing, our experienced team is ready to help.
          Contact Buffalo Tree Service today for a free estimate.
        </p>

       <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <Link
            to="/contact"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition w-full sm:w-auto text-center"
          >
            Get Free Estimate
          </Link>
          <a
            href="tel:+17162001550"
            className="border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-700 transition w-full sm:w-auto text-center"
          >
            Call Now
          </a>
        </div>

      </div>
    </section>
  );
}

export default CTASection;