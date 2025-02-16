import React from 'react';
// images of project previews
import Project1 from '../assets/apll-removebg-preview.png';
import Project2 from '../assets/cofe-removebg-preview.png';
import Project3 from '../assets/st-removebg-preview.png';

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-accent mb-4">My Projects</h2>
          <p className="text-gray-600">
            Here are some of my favorite works showcasing my skills as a developer and designer.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Project 1 */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg">
            <img src={Project1} alt="Project 1" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg font-bold">Project 1: Weather App</h3>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg">
            <img src={Project2} alt="Project 2" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg font-bold">Project 2: Coffe-website</h3>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg">
            <img src={Project3} alt="Project 3" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg font-bold">Project 3: Gestion des stocks</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Work;
