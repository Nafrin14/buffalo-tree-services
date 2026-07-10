import { Link } from "react-router-dom";
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";

const blogs = [
  {
    image: blog1,
    title: "5 Essential Tree Care Tips",
    description:
      "Learn simple tree care practices to keep your trees healthy and beautiful all year round.",
  },
  {
    image: blog2,
    title: "How to Prepare Trees for Storm Season",
    description:
      "Protect your property by preparing trees before heavy storms and strong winds arrive.",
  },
  {
    image: blog3,
    title: "When Should You Trim Your Trees?",
    description:
      "Discover the best seasons and methods for safe and healthy tree trimming.",
  },
];

function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-green-700 font-semibold uppercase tracking-widest text-center">
          Latest Blog
        </p>

        <h2 className="text-5xl font-bold text-center text-gray-900 mt-3 mb-14">
          Tree Care Tips & News
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {blog.description}
                </p>

        <Link
  to="/blog"
  className="inline-block bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-lg transition"
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

export default BlogSection;