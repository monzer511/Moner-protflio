import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
            <span className="block">Hello, I'm</span>
            <span className="block text-primary mt-1">{PROFILE_DATA.name}</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-slate-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {PROFILE_DATA.title} based in {PROFILE_DATA.location}.
            <br className="hidden md:block" />
            Turning complex problems into simple, beautiful, and intuitive designs.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 gap-4">
            <div className="rounded-md shadow">
              <a
                href="#projects"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all"
              >
                View Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0">
              <a
                href={PROFILE_DATA.socials.find(s => s.platform === 'LinkedIn')?.url}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-blue-50 hover:bg-blue-100 md:py-4 md:text-lg md:px-10 transition-all"
              >
                LinkedIn
                <Linkedin className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center space-x-6">
            <a href={PROFILE_DATA.socials.find(s => s.platform === 'GitHub')?.url} className="text-slate-400 hover:text-slate-600 transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-8 w-8" />
            </a>
            <a href={`mailto:${PROFILE_DATA.email}`} className="text-slate-400 hover:text-slate-600 transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 -z-10 w-full h-full overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default Hero;
