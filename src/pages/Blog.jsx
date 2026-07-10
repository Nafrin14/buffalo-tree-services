import { Link } from "react-router-dom";
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";

const blogs = [
  {
    image: blog1,
    date: "July 2026",
    title: "5 Essential Tree Care Tips Every Homeowner Should Know",
    description:
      "Healthy trees improve your property value, provide shade, and make your outdoor space more beautiful.",
    tips: [
      "Water young trees regularly.",
      "Remove dead or weak branches.",
      "Keep mulch around the base.",
      "Check trees after storms.",
    ],
  },
  {
    image: blog2,
    date: "June 2026",
    title: "How to Prepare Your Trees Before Storm Season",
    description:
      "Preparing early helps protect your home, vehicles, and outdoor space from storm damage.",
    tips: [
      "Remove hanging branches.",
      "Trim branches near roofs.",
      "Check leaning trees.",
      "Clear dead wood early.",
    ],
  },
  {
    image: blog3,
    date: "May 2026",
    title: "When Is the Best Time to Trim Trees?",
    description:
      "Tree trimming keeps your trees healthy, safe, attractive, and properly shaped throughout the year.",
    tips: [
      "Trim during late winter.",
      "Remove damaged branches quickly.",
      "Avoid over-trimming.",
      "Hire professionals for tall trees.",
    ],
  },
];

function Blog() {
  return (
    <div>
      <section className="relative pt-16 pb-10 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute -top-[20%] -left-[10%] w-[45%] h-[45%] rounded-full bg-green-200/30 blur-3xl"></div>
    <div className="absolute top-[60%] -right-[10%] w-[35%] h-[50%] rounded-full bg-emerald-100/30 blur-3xl"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100/80 text-green-800 text-sm font-semibold tracking-wide mb-5 shadow-sm border border-green-200">
      Our Blog
    </div>

    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight leading-tight">
      Tree Care{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
        Tips & News
      </span>
    </h1>

    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
      Helpful tips from Buffalo Tree Service to keep your trees safe, healthy,
      and beautiful.
    </p>
  </div>
</section>
      <section className="pt-8 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <p className="text-green-700 font-semibold text-sm mb-2">
                  {blog.date}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm leading-6 mb-5">
                  {blog.description}
                </p>

                <ul className="space-y-2 text-gray-700 text-sm leading-6">
                  {blog.tips.map((tip, i) => (
                    <li key={i}>✔ {tip}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-14">
          <div className="bg-green-800 text-white rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Professional Tree Care?
            </h2>

            <p className="text-green-100 mb-7 max-w-2xl mx-auto">
              Our experienced team is ready to help with tree removal, trimming,
              stump grinding, emergency tree services, and more.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-white text-green-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;