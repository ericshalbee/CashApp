import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Cash App</h3>
            <ul className="space-y-2">
              <li><a href="https://cash.app/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="https://cash.app/careers" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="https://cash.app/press" className="text-gray-400 hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="https://cash.app/legal/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="https://cash.app/legal/terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="https://cash.app/legal/licenses" className="text-gray-400 hover:text-white">Licenses</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="https://cash.app/help" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="https://cash.app/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="https://status.cash.app" className="text-gray-400 hover:text-white">System Status</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li><a href="https://twitter.com/cashapp" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="https://instagram.com/cashapp" className="text-gray-400 hover:text-white">Instagram</a></li>
              <li><a href="https://www.facebook.com/cashapp" className="text-gray-400 hover:text-white">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Cash App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;