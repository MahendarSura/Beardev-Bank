
import React from "react";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-sans">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between mb-12">
        <div className="text-5xl font-extrabold text-orange-500">Beardev Bank</div>
        <ul className="hidden md:flex space-x-10 font-semibold text-gray-700">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">Services</li>
          <li className="hover:text-orange-500 cursor-pointer">Courses</li>
          <li className="hover:text-orange-500 cursor-pointer">About</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
        </ul>
        <div className="text-blue-600 font-semibold cursor-pointer hover:underline">
          Login/Signup
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-[#4169E1] p-10 rounded-lg text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold">
              Professional Certificate Program in Cloud Computing and DevOps
            </h1>
            <p className="text-lg">
              Cloud Computing can help unlock 46 million jobs by 2030. Enroll and find yourself in the driver’s seat of the next big revolution in tech.
            </p>
            <p className="text-lg">
              Gain real-world experience in cloud computing with AWS, Azure, and GCP, alongside DevOps training.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-[#4169E1] font-semibold px-6 py-3 rounded hover:bg-gray-200 transition">
                Talk to Career Expert
              </button>
              <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-[#4169E1] transition">
                Download Brochure
              </button>
            </div>
            <div className="mt-8 flex gap-8 text-center max-w-md">
              <div>
                <h3 className="font-semibold text-xl">3 Tracks</h3>
                <p>Choose Your Path</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">8 Months</h3>
                <p>Program Duration</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">31 Aug 2025</h3>
                <p>Admission Deadline</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/cloud-devops-hero.png"
              alt="Cloud & DevOps Course"
              className="rounded shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 p-8 rounded mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Us?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <li className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Gen AI & DevOps Infusion</h3>
            <p>Experience a curriculum combining Cloud Computing, GenAI, and DevOps methodologies.</p>
          </li>
          <li className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Career Support</h3>
            <p>Personalized coaching to prepare you for Cloud and DevOps roles at leading companies.</p>
          </li>
          <li className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Certified Instructors</h3>
            <p>Learn from AWS, Azure, and GCP-certified instructors with real-world experience.</p>
          </li>
          <li className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Real-world Projects</h3>
            <p>Hands-on experience with 50+ projects in cloud setup, automation, and container orchestration.</p>
          </li>
          <li className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Comprehensive Cloud Tools</h3>
            <p>Master AWS, Azure, GCP, Docker, Kubernetes, Terraform and more.</p>
          </li>
          <li className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Customized Tracks</h3>
            <p>Pick from AZ‑104, SAA‑C03, or both for tailored certification goals.</p>
          </li>
        </ul>
      </section>

      {/* Curriculum */}
      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Curriculum Overview</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Course 0: Python Fundamentals</h3>
            <p>Basics of Python syntax, control structures, functions, and scripting.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Course 1: Mastering AWS and DevOps (16 weeks)</h3>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Course 2: Mastering Microsoft Azure (16 weeks)</h3>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Course 3: Mastering Google Cloud Platform (5 weeks)</h3>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-12 bg-gray-50 p-8 rounded max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Work on Real-World Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-2">Mentorship Project I</h3>
            <p>Automate database backup and restoration on AWS using Amazon RDS, Amazon S3, and Python scripting.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-2">Mentorship Project II</h3>
            <p>Design a serverless e-commerce application using AWS services.</p>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Who Will You Learn From?</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="text-center max-w-xs">
            <img src="/neelam-pawar.jpg" alt="Neelam Pawar" className="rounded-full mx-auto w-32 h-32 object-cover" />
            <h3 className="mt-4 font-semibold">Neelam Pawar</h3>
            <p>Cloud Architect at Google with 12 years of experience across AWS, Azure & GCP.</p>
          </div>
          <div className="text-center max-w-xs">
            <img src="/neeraj-kheria.jpg" alt="Neeraj Kheria" className="rounded-full mx-auto w-32 h-32 object-cover" />
            <h3 className="mt-4 font-semibold">Neeraj Kheria</h3>
            <p>Director at MakeMyBrand, Microsoft & AWS certified with 15+ years of industry experience.</p>
          </div>
        </div>
      </section>

      {/* Certification Info */}
      <section className="mt-16 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          Get certified by Beardev-Bank
        </h2>
        <ul className="space-y-6 text-lg text-gray-700">
          <li>
            <span className="font-semibold">• Industry-recognised certificate</span><br />
            Validate your cloud and DevOps skills with a certificate from Beardev-Bank, trusted by top tech companies.
          </li>
          <li>
            <span className="font-semibold">• Global recognition</span><br />
            Showcase your proficiency in cloud architecture and automation with a certificate that opens doors globally.
          </li>
          <li>
            <span className="font-semibold">• Career growth</span><br />
            Leverage your certificate to secure roles with leading cloud-based companies.
          </li>
        </ul>
      </section>

      {/* Pricing Section */}
      <section className="mt-12 bg-blue-600 text-white p-8 rounded max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Course Fee</h2>
        <p className="text-xl mb-6">INR 80,000* (Inclusive of taxes)</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition">
          Apply Now
        </button>
      </section>

      {/* Guidance & Eligibility Box */}
      <section className="mt-12 max-w-5xl mx-auto bg-white border rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Need guidance? Talk to our career expert!
        </h3>
        <p className="mb-6 text-center text-gray-700">
          Get in touch with our program advisor & get your queries resolved.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-lg mx-auto mb-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-800">Connect with us</h4>
            <p className="text-gray-700">Reach out to our expert <strong>0800-3410345</strong></p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full md:w-auto">
            Find out if you're eligible
          </button>
        </div>
        <form className="max-w-md mx-auto space-y-4 text-gray-800">
          <div className="flex items-center gap-2">
            <span className="bg-gray-200 px-3 py-2 rounded-l border border-gray-300">+91</span>
            <input type="tel" placeholder="Phone Number" className="flex-1 border border-gray-300 rounded-r px-4 py-2" required />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-sm text-gray-700">
              By clicking, I accept the <a href="#" className="text-blue-600 underline">T&C</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>
            </label>
          </div>
          <button type="submit" className="bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-700 transition font-semibold">
            Check eligibility
          </button>
        </form>
        <div className="mt-8 text-center">
          <h4 className="text-xl font-semibold mb-2 text-gray-800">
            Ready to take the next step in your career?
          </h4>
          <button className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition font-semibold">
            Apply Now
          </button>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="mt-12 max-w-5xl mx-auto px-6 text-center text-gray-800">
        <h3 className="text-2xl font-bold mb-4">Disclaimer</h3>
        <p className="mb-3 text-lg">
          The above statistics depend on various factors and individual results may vary. Past performance is no guarantee of future results.
        </p>
        <p className="mb-3 text-lg">
          The student assumes full responsibility for all expenses associated with visas, travel, & related costs. Beardev-Bank does not.
        </p>
        <a href="#" className="text-blue-600 underline font-semibold">Read More</a>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#4169E1] text-white pt-12 pb-6 mt-16 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">

            {/* Left: Logo + Description */}
            <div>
              <h2 className="text-2xl font-extrabold text-orange-500 mb-4">beardev-bank</h2>
              <p>
                Empowering engineers and businesses with expert DevOps solutions, cloud automation, and career guidance — 100% remote.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Blogs</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Our Key Services */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Our Key Services</h3>
              <ul className="space-y-2">
                <li>✦ DevOps Consultation</li>
                <li>✦ Cloud Architecture Setup</li>
                <li>✦ Resume & LinkedIn Optimization</li>
                <li>✦ Mock Interviews & Mentorship</li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <p className="mb-1">beardevbank@gmail.com</p>
              <p className="mb-1">beardevbank.in</p>
              <p className="mb-4">Fully remote — available worldwide.</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" aria-label="LinkedIn" className="hover:text-orange-400">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-orange-400">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-orange-400">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" aria-label="GitHub" className="hover:text-orange-400">
                  <i className="fab fa-github fa-lg"></i>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
            © 2025 beardev-Bank - All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
