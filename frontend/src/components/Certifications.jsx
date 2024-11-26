import React from 'react';
    import certificationsData from '../data/certificationsData';

    const Certifications = () => {
      return (
        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-bold mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map(cert => (
              <div key={cert.id} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-700 mb-2">{cert.description}</p>
                <p className="text-gray-600">Date: {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

    export default Certifications;
