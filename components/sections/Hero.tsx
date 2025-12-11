'use client';

import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-black"
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                  Muhammad Aetzaz Ashraf
                </h1>
                <p className="text-xl sm:text-2xl text-slate-300">
                  Software Engineer & Automation Specialist
                </p>
              </div>

              <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                Specializing in software development, automations such as n8n, bubble.io, CRMs, and AI solutions. I design efficient workflows and build scalable applications that solve real-world problems.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="gap-2 bg-white text-black hover:bg-slate-100">
                  <Download size={18} />
                  <a href="/aetzaz_resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="gap-2 bg-slate-700 text-white hover:bg-slate-600"
                >
                  Hire Me
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-64 h-80 lg:w-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Muhammad Aetzaz Ashraf"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="pt-16 flex justify-center lg:pt-24 animate-bounce">
            <ArrowDown className="text-slate-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
