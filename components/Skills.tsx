import React from 'react';
import { PROFILE_DATA } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Tools & Technologies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {PROFILE_DATA.skills.map((skill) => (
                <div key={skill} className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-lg font-medium">{skill}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
