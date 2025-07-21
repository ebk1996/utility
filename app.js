import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when screen size changes (e.g., from mobile to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint in Tailwind
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            {/* Placeholder for TEP Logo */}
            <svg
              className="w-10 h-10 mr-2 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 7h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            <span className="text-2xl font-bold">TEP Clone</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-200 transition duration-300">Home</a>
            <a href="#" className="hover:text-blue-200 transition duration-300">My Account</a>
            <a href="#" className="hover:text-blue-200 transition duration-300">Outages</a>
            <a href="#" className="hover:text-blue-200 transition duration-300">Energy Solutions</a>
            <a href="#" className="hover:text-blue-200 transition duration-300">About Us</a>
            <a href="#" className="hover:text-blue-200 transition duration-300">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Conditional Rendering) */}
        {isMenuOpen && (
          <nav className="md:hidden bg-blue-700 pb-4">
            <a href="#" className="block px-4 py-2 text-white hover:bg-blue-600 transition duration-300">Home</a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-blue-600 transition duration-300">My Account</a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-blue-600 transition duration-300">Outages</a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-blue-600 transition duration-300">Energy Solutions</a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-blue-600 transition duration-300">About Us</a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-blue-600 transition duration-300">Contact</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(https://placehold.co/1200x400/003366/FFFFFF?text=Powering+Our+Community)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Your Trusted Energy Partner
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Providing reliable, affordable, and sustainable energy to our community.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </section>

      {/* Key Services/Information Cards Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Quick Actions & Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Pay Bill */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
            <svg
              className="w-16 h-16 text-blue-600 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8h16v10zm-2-7H6v-2h12v2z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Pay My Bill</h3>
            <p className="text-gray-600 mb-4">
              View your bill, make a payment, or set up automatic payments.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              Go to Payment Options
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>

          {/* Card 2: Outage Map */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
            <svg
              className="w-16 h-16 text-red-600 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 14h-2V9h2v5zm0 3h-2v-2h2v2zm6-14H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Outage Map</h3>
            <p className="text-gray-600 mb-4">
              Check current outages in your area and report a new one.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              View Outage Map
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>

          {/* Card 3: Start/Stop Service */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
            <svg
              className="w-16 h-16 text-green-600 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Start/Stop Service</h3>
            <p className="text-gray-600 mb-4">
              Manage your service connections for new homes or moving.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              Manage Service
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Another Section: Energy Efficiency */}
      <section className="bg-blue-100 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="https://placehold.co/600x400/ADD8E6/000000?text=Energy+Efficiency"
              alt="Energy Efficiency"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Save Energy, Save Money</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Discover programs and tips to help you reduce your energy consumption and lower your monthly bill.
              From smart home devices to energy audits, we're here to help you be more efficient.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} TEP Clone. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-blue-200 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-200 transition duration-300">Terms of Use</a>
            <a href="#" className="hover:text-blue-200 transition duration-300">Sitemap</a>
            <a href="#" className="hover:text-blue-200 transition duration-300">Accessibility</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default App;
