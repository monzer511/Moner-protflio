import React from 'react';
import { PROFILE_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Who am I?
          </p>
        </div>
        
        <div className="mt-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-slate-100 shadow-xl">
                     <img 
                        src="https://picsum.photos/400/400?grayscale" 
                        alt={PROFILE_DATA.name}
                        className="w-full h-full object-cover"
                     />
                </div>
            </div>
            <div className="w-full md:w-2/3">
                <p className="text-lg text-slate-600 leading-relaxed">
                    {PROFILE_DATA.about}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <span className="block text-2xl font-bold text-primary">3+</span>
                        <span className="text-sm text-slate-500">Years Experience</span>
                    </div>
                     <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <span className="block text-2xl font-bold text-primary">10+</span>
                        <span className="text-sm text-slate-500">Projects Completed</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
