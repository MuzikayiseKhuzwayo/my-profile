import React, { useState } from 'react';
import '../css/Body.css';

// Sample portfolio data (replace with your actual data)
const portfolioItems = [
  {
    id: 1,
    title: 'Project 1: Remy Sec',
    description: 'A description of Remy Sec project.',
    image: 'https://via.placeholder.com/400x200', // Replace with your image URL
    details: 'Detailed information about Project 1...'
  },
  {
    id: 2,
    title: 'Project 2: This Project', 
    description: 'A description of this project.',
    image: 'https://via.placeholder.com/400x200', // Replace with your image URL
    details: 'Detailed information about Project 2...'
  },
  // Add more projects here
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio-section" className="all-sections Portfolio page-text">
      <div className="container container-1">
        <h1>Portfolio</h1>
      </div>
      <div className="container container-2">
        <div className="portfolio-carousel">
          {portfolioItems.map((project) => (
            <div key={project.id} className="portfolio-item">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button onClick={() => openModal(project)}>Learn More</button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;