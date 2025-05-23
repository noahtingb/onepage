import React from "react";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-500 text-white p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">Services</Link>
            </li>
          </ul>
        </nav>

        <div className="p-8">
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </div>
    <>
  );
}

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-gray-700">This is the Home page.</p>
    </div>
  );
}

function About() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700">Learn more about our company and values.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700">Feel free to reach out for more information.</p>
    </div>
  );
}

function Services() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="text-gray-700">Discover the wide range of services we offer.</p>
    </div>
  );
}

export default App;
