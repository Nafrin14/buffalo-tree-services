import { Link } from "react-router-dom";
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
  },
  {
    title: "Tree Trimming",
    image: treeTrimming,
  },
  {
  title: "Tree Crown Reduction",
  image: treeCrown,
},
  {
    title: "Stump Grinding",
    image: stumpGrinding,
  },
  {
    title: "Emergency Tree Service",
    image: emergencyTree,
  },
  {
    title: "Land & Brush Cutting",
    image: landBrush,
  },
  {
    title: "Brush Cutting Service",
    image: brushCutting,
  },
  {
    title: "Tree Cutting Service",
    image: treeCutting,
  },
  {
    title: "Wood Chipper Service",
    image: woodChipper,
  },
];

function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-4">
          Our Tree Services
        </h2>

        <p className="text-center text-gray-500 mb-14">
          Professional tree care solutions for residential and commercial properties.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {service.title}
                </h3>

               <Link
  to="/services"
  className="inline-block mt-3 bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
>
  Learn More
</Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;