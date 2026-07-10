import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-3xl font-bold text-green-500 mb-4">
            Buffalo Tree Service
          </h2>

          <p className="text-gray-400 leading-7">
            Professional tree removal, tree trimming, emergency tree services,
            stump grinding, and land clearing for residential and commercial
            properties.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li><Link to="/" className="hover:text-green-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-400">About</Link></li>
            <li><Link to="/services" className="hover:text-green-400">Services</Link></li>
            <li><Link to="/blog" className="hover:text-green-400">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
            <li><Link to="/terms" className="hover:text-green-400">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-green-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Our Services</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Tree Removal</li>
            <li>Tree Trimming</li>
            <li>Tree Pruning</li>
            <li>Emergency Tree Service</li>
            <li>Stump Grinding</li>
            <li>Land Clearing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact</h3>

          <div className="space-y-3 text-gray-400">
            <p>📍 Buffalo, New York</p>
            <p>📞 +1 (716) 200-1550</p>
            <p>✉️ kdlandscapingny@gmail.com</p>
            
          </div>
        </div>

      </div>

      <div className="border-t border-slate-700 py-6 text-center text-gray-400">
        © 2026 Buffalo Tree Service. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;