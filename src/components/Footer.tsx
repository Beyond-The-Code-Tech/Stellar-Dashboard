import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Company Info Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stellar Dashboard</h3>
            <p className="text-sm text-gray-400 mb-4">
              Stellar Dashboard is a modern analytics platform that helps businesses monitor and visualize their data in real-time.
            </p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Stellar Dashboard. All rights reserved.</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="/#features" className="text-sm text-gray-400 hover:text-white">Features</a>
              </li>
              <li>
                <a href="/pricing" className="text-sm text-gray-400 hover:text-white">Pricing</a>
              </li>
              <li>
                <a href="/demo" className="text-sm text-gray-400 hover:text-white">Demo</a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-gray-400 hover:text-white">Terms & Conditions</a>
              </li>
              <li>
                <a href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-400 mb-4">
              Have questions? Get in touch with our team for any inquiries or support.
            </p>
            <a
              href="mailto:support@stellardashboard.com"
              className="text-sm text-gray-400 hover:text-white"
            >
              support@stellardashboard.com
            </a>
            <br />
            <a
              href="tel:+1234567890"
              className="text-sm text-gray-400 hover:text-white"
            >
              +1 (234) 567-890
            </a>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
          <p className="text-sm text-gray-400 mb-6">
            Subscribe to our newsletter for the latest updates, features, and tips for using Stellar Dashboard.
          </p>
          <div className="max-w-sm mx-auto">
            <form className="flex items-center space-x-2 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 text-gray-900 rounded-md focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
