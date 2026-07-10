import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    if (!document.getElementById("ghl-form-script")) {
      const script = document.createElement("script");
      script.src = "https://link.kdlead.com/js/form_embed.js";
      script.async = true;
      script.id = "ghl-form-script";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
        {/* Decorative blur elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-green-200/40 blur-3xl"></div>
          <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-emerald-100/40 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100/80 text-green-800 text-sm font-semibold tracking-wide mb-6 shadow-sm border border-green-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" />
            </svg>
            Get In Touch
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Us</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Request your free estimate from Buffalo Tree Service today.
          </p>
        </div>
      </section>

      <section className="pt-8 pb-20 bg-[#eef5f1]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 h-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">📞 Phone</p>
                <p className="text-xl text-gray-800">+1 (716) 200-1550</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">✉️ Email</p>
                <p className="text-xl text-gray-800">kdlandscapingny@gmail.com</p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">⏰ Operating Hours</p>
                <p className="text-lg text-gray-800">Mon - Sat: 8:00 AM - 6:00 PM</p>
                <p className="text-md text-red-600 font-medium mt-1">24/7 Emergency Service Available</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">📍 Service Area</p>
                <p className="text-lg text-gray-800">Buffalo, NY and surrounding suburbs</p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">🌳 Services</p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Tree Removal, Tree Trimming, Stump Grinding, Emergency Tree Service, Land Clearing & Brush Cutting.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://link.kdlead.com/widget/form/QLyA2nCeQW7p6sQRyLiG"
              title="Buffalo Tree Service Form"
              className="w-full border-0"
              style={{
                height: "1000px",
                backgroundColor: "white",
                colorScheme: "light",
              }}
              id="inline-QLyA2nCeQW7p6sQRyLiG"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form 1"
              data-height="1000"
              data-layout-iframe-id="inline-QLyA2nCeQW7p6sQRyLiG"
              data-form-id="QLyA2nCeQW7p6sQRyLiG"
            />
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;