import React from 'react';
    import { Folder, Link } from 'lucide-react';

    // Component to render each project as a card
    const ProjectCard = ({ project }) => (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <img src={project.image_url} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Folder className="mr-2 text-gray-500" aria-hidden="true" />
            <h3 className="text-xl font-bold">{project.title}</h3>
          </div>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <p className="text-gray-600 mb-4">Technologies: {project.technologies.join(', ')}</p>
          {project.link && (
            <a href={project.link} className="flex items-center text-blue-500 hover:underline" aria-label={`Learn more about ${project.title}`}>
              <Link className="mr-2" aria-hidden="true" />
              Learn More
            </a>
          )}
        </div>
      </div>
    );

    export default ProjectCard;
