import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import LoadingSpinner from './LoadingSpinner';
    import ErrorBanner from './ErrorBanner';
    import ProjectCard from './ProjectCard';

    // Main Projects component
    const Projects = () => {
      // State to hold the list of projects
      const [projects, setProjects] = useState([]);
      // State to manage loading state
      const [loading, setLoading] = useState(true);
      // State to manage error state
      const [error, setError] = useState(null);

      // Effect hook to fetch projects from the backend when the component mounts
      useEffect(() => {
        // Function to fetch projects
        const fetchProjects = async () => {
          try {
            const response = await axios.get('/api/projects');
            setProjects(response.data);
          } catch (error) {
            // Set error state if the request fails
            setError('Failed to fetch projects. Please try again later.');
            console.error('Error fetching projects:', error);
          } finally {
            // Set loading state to false after the request completes
            setLoading(false);
          }
        };

        fetchProjects();
      }, []);

      return (
        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorBanner message={error} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      );
    };

    export default Projects;
