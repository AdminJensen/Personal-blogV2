import React from 'react';
    import { useParams } from 'react-router-dom';
    import projectsData from '../data/projectsData';

    const ProjectDetails = () => {
      const { id } = useParams();
      const project = projectsData.find(p => p.id === parseInt(id));

      if (!project) {
        return <div>Project not found</div>;
      }

      return (
        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
          <img src={project.image_url} alt={project.title} className="w-full h-64 object-cover mb-6" />
          <p className="text-gray-700 mb-4">{project.description}</p>
          <p className="text-gray-600 mb-4">Technologies: {project.technologies.join(', ')}</p>
          {project.link && (
            <a href={project.link} className="text-blue-500 hover:underline">
              Learn More
            </a>
          )}
        </div>
      );
    };

    export default ProjectDetails;
