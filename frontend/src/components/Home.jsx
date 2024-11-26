import React from 'react';
    import { Link } from 'react-router-dom';

    const Home = () => {
      return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg text-gray-700 mb-6">
              A brief introduction about me and my professional journey.
            </p>
            <Link
              to="/projects"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      );
    };

    export default Home;
