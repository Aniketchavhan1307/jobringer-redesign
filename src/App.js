import React from 'react';
import './App.css';

const JobCard = ({ title, company, location, description }) => (
  <div
    className="job-card border p-4 rounded shadow hover:shadow-lg transition-transform transform hover:scale-105"
    role="article"
    aria-label={`${title} at ${company}`}
  >
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-gray-700">{company} - {location}</p>
    <p className="text-sm text-gray-600 mt-2">{description}</p>
    <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition">
      Apply Now
    </button>
  </div>
);

const App = () => {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="fixed w-full bg-gray-800 text-white p-4 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">Jobringer</div>
          <div className="space-x-4">
            <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
              Sign In
            </button>
            <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Find Your Dream Job Today</h1>
        <div className="mt-6 flex justify-center items-center">
          <input
            type="text"
            placeholder="Search for jobs..."
            className="p-3 rounded-l-lg w-1/2 border-none"
            aria-label="Search for jobs"
          />
          <button className="bg-yellow-500 text-black px-4 py-3 rounded-r-lg hover:bg-yellow-600 transition">
            Search
          </button>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="jobs bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Job Cards */}
            <JobCard
              title="Software Engineer"
              company="Company XYZ"
              location="Remote"
              description="Develop and maintain cutting-edge software solutions."
            />
            <JobCard
              title="Frontend Developer"
              company="Tech Corp"
              location="On-site"
              description="Design and implement user-friendly web interfaces."
            />
            <JobCard
              title="Backend Developer"
              company="Innovate LLC"
              location="Remote"
              description="Create robust and scalable server-side applications."
            />
            <JobCard
              title="UI/UX Designer"
              company="DesignPro"
              location="Hybrid"
              description="Craft visually appealing and intuitive designs."
            />
            <JobCard
              title="Data Scientist"
              company="Data Labs"
              location="Remote"
              description="Analyze and interpret complex data for decision-making."
            />
            <JobCard
              title="Project Manager"
              company="BuildIt"
              location="On-site"
              description="Oversee project timelines and team coordination."
            />
          </div>
        </div>
      </section>

     {/* Footer Section */}
     <footer className="fixed w-full bottom-0 h-7 mx-auto bg-gray-800 text-white ">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Jobringer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
