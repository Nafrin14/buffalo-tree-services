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

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
          <button className="bg-white text-green-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition w-full sm:w-auto text-center">
            Get Free Estimate
          </button>

          <button className="border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-800 transition w-full sm:w-auto text-center">
            Call Now
          </button>
        </div>

      </div>
    </section>
  );
}

export default CTASection;