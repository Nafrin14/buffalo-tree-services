import treeRemoval from "../assets/images/tree-removal.jpg";
import treeTrimming from "../assets/images/tree-trimming.jpg";
import treeCrown from "../assets/images/tree-crown.jpg";
import stumpGrinding from "../assets/images/stump-grinding.jpg";
import emergencyTree from "../assets/images/emergency-tree.jpg";
import landBrush from "../assets/images/land-brush.jpg";
import brushCutting from "../assets/images/brush-cutting.jpg";
import treeCutting from "../assets/images/tree-cutting.jpg";
import woodChipper from "../assets/images/wood-chipper.jpg";

const services = [
  {
    title: "Tree Removal",
    image: treeRemoval,
    description:
      "Safe and efficient tree removal for residential and commercial properties.",
  },
  {
    title: "Tree Trimming",
    image: treeTrimming,
    description:
      "Improve tree health and appearance with professional trimming services.",
  },
  {
    title: "Tree Crown Reduction",
    image: treeCrown,
    description:
      "Reduce tree size while maintaining its natural beauty and structural integrity.",
  },
  {
    title: "Stump Grinding",
    image: stumpGrinding,
    description:
      "Remove unwanted tree stumps quickly and safely using modern equipment.",
  },
  {
    title: "Emergency Tree Service",
    image: emergencyTree,
    description:
      "24/7 emergency tree removal after storms and dangerous situations.",
  },
  {
    title: "Land & Brush Clearing",
    image: landBrush,
    description:
      "Professional land clearing and brush removal for residential and commercial projects.",
  },
  {
    title: "Brush Cutting",
    image: brushCutting,
    description:
      "Keep your property clean and well maintained with expert brush cutting.",
  },
  {
    title: "Tree Cutting",
    image: treeCutting,
    description:
      "Precision tree cutting performed safely by experienced professionals.",
  },
  {
    title: "Wood Chipper Service",
    image: woodChipper,
    description:
      "Convert tree waste into reusable mulch using our wood chipping service.",
  },
];

function Services() {
  return (
    <div>

      {/* Hero */}
<section className="relative pt-16 pb-10 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute -top-[20%] -left-[10%] w-[45%] h-[45%] rounded-full bg-green-200/30 blur-3xl"></div>
    <div className="absolute top-[60%] -right-[10%] w-[35%] h-[50%] rounded-full bg-emerald-100/30 blur-3xl"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100/80 text-green-800 text-sm font-semibold tracking-wide mb-5 shadow-sm border border-green-200">
      Professional Care
    </div>

    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight leading-tight">
      Our Tree{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
        Services
      </span>
    </h1>

    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
      Discover our comprehensive tree care solutions designed to keep your
      property safe, beautiful, and thriving throughout the seasons in Buffalo.
    </p>
  </div>
</section>
      {/* Services */}
      <section className="pt-8 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 leading-7 mb-6">
                    {service.description}
                  </p>

                  <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">
                    Request Free Quote
                  </button>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}

export default Services;