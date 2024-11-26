import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Home from './components/Home';
    import Projects from './components/Projects';
    import ProjectDetails from './components/ProjectDetails';
    import Certifications from './components/Certifications';
    import Blog from './components/Blog';
    import Contact from './components/Contact';

    const App = () => {
      return (
        <Router>
          <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
              <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">My Portfolio</h1>
              </div>
            </header>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </Router>
      );
    };

    export default App;
