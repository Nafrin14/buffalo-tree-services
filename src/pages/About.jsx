import aboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <div>

      {/* Hero Section */}
<section className="relative pt-16 pb-10 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
  {/* Decorative blur elements */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute -top-[20%] -left-[10%] w-[45%] h-[45%] rounded-full bg-green-200/30 blur-3xl"></div>
    <div className="absolute top-[60%] -right-[10%] w-[35%] h-[50%] rounded-full bg-emerald-100/30 blur-3xl"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100/80 text-green-800 text-sm font-semibold tracking-wide mb-5 shadow-sm border border-green-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z"
          clipRule="evenodd"
        />
      </svg>
      About Us
    </div>

    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight leading-tight">
      About Buffalo{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
        Tree Service
      </span>
    </h1>

    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
      Providing professional tree care services with safety, quality, and
      customer satisfaction as our top priorities.
    </p>
  </div>
</section>

      {/* About Content */}
      <section className="pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <img
            src={aboutImage}
            alt="About"
            className="rounded-2xl shadow-xl"
          />

          <div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted Tree Care Professionals
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Buffalo Tree Service has been helping homeowners and businesses
              with safe and reliable tree services. Our experienced arborists
              provide expert tree removal, trimming, pruning, stump grinding,
              emergency tree services, and land clearing.
            </p>

            <p className="text-gray-600 leading-8">
              We are committed to protecting your property while keeping your
              trees healthy and your outdoor space beautiful.
            </p>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-green-700 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8">
              To provide safe, affordable, and professional tree care services
              while maintaining the highest standards of quality and customer
              satisfaction.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-green-700 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8">
              To become Buffalo's most trusted tree service company through
              exceptional workmanship, safety, and outstanding customer service.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-green-700">15+</h2>
              <p className="mt-3 text-gray-600">Years Experience</p>
            </div>

            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-green-700">1000+</h2>
              <p className="mt-3 text-gray-600">Projects Completed</p>
            </div>

            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-green-700">500+</h2>
              <p className="mt-3 text-gray-600">Happy Clients</p>
            </div>

            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-green-700">24/7</h2>
              <p className="mt-3 text-gray-600">Emergency Service</p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default About;