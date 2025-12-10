import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Featured Projects
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROFILE_DATA.projects.map((project) => (
                <div key={project.id} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div className="h-48 overflow-hidden relative">
                         {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10"></div>
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                        <p className="text-slate-600 mb-4 flex-1 text-sm leading-relaxed">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.techStack.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        <div className="flex justify-between items-center mt-auto border-t border-slate-100 pt-4">
                            <a href="#" className="flex items-center text-sm font-medium text-slate-500 hover:text-primary transition-colors">
                                <Github className="w-4 h-4 mr-2" /> Code
                            </a>
                            <a href={project.link || "#"} className="flex items-center text-sm font-medium text-primary hover:text-blue-700 transition-colors">
                                Live Demo <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
