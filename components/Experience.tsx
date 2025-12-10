import React from 'react';
import { Briefcase } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Career Path</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Work Experience
          </p>
        </div>

        <div className="relative container mx-auto px-6 flex flex-col space-y-8">
            <div className="absolute z-0 w-1 h-full bg-slate-200 left-8 md:left-1/2 transform -translate-x-1/2 top-4 rounded-full"></div>
            
            {PROFILE_DATA.experience.map((job, index) => (
                <div key={job.id} className={`mt-6 sm:mt-0 sm:mb-12 relative flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {/* Icon centered */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary border-4 border-white z-10">
                        <Briefcase className="w-4 h-4 text-white" />
                    </div>

                    {/* Content Card */}
                    <div className={`mt-6 sm:mt-0 relative ml-20 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-100">
                            <span className="text-sm font-bold tracking-wide text-primary uppercase">{job.period}</span>
                            <h3 className="text-xl font-bold text-slate-900 mt-1">{job.role}</h3>
                            <h4 className="text-md font-medium text-slate-600 mb-4">{job.company}</h4>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 text-sm">
                                {job.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
