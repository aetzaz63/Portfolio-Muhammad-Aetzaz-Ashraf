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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black dark:bg-black"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-orange-500 transition-colors duration-300"
            aria-label={link.label}
          >
            <link.icon size={24} />
          </a>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Build Scalable Software
            <br />
            & AI Solutions
          </h1>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-md transition-all duration-300 transform hover:scale-105"
          >
            GET IN TOUCH
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 dark:from-black to-transparent"></div>
    </section>
  );
}
