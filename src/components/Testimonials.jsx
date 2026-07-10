function Testimonials() {
  const reviews = [
    {
      name: "John Smith",
      text: "Buffalo Tree Service removed a large tree safely and cleaned everything perfectly. Highly recommended.",
    },
    {
      name: "Michael Brown",
      text: "Professional team, on time service, and affordable pricing. Very satisfied with the work.",
    },
    {
      name: "Sarah Wilson",
      text: "Excellent emergency tree removal service after the storm. Fast and reliable team.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-green-700 font-semibold text-center uppercase tracking-widest">
          Customer Reviews
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mt-3 mb-14">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl shadow-md p-8">
              <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 leading-7 mb-6">"{review.text}"</p>
              <h3 className="font-bold text-lg text-gray-900">
                {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;