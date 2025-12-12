'use client';

import { Instagram, Github, Linkedin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/aetzaz63', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/muhammad-aetzaz-ashraf', label: 'LinkedIn' },
    { icon: FileText, href: 'https://medium.com', label: 'Medium' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-400 transition-colors duration-300"
            aria-label={link.label}
          >
            <link.icon size={24} />
          </a>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Software Engineer <br />& AI Specialist
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Building scalable web applications and intelligent automation solutions
          </p>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
