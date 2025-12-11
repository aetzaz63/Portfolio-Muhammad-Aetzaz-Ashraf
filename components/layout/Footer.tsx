'use client';

import { Github, Linkedin, Mail, Instagram, FileText } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black dark:bg-black text-slate-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://github.com/aetzaz63"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-aetzaz-ashraf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 transition-colors"
            >
              <FileText size={24} />
            </a>
            <a
              href="mailto:aetzaz36@gmail.com"
              className="hover:text-orange-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Muhammad Aetzaz Ashraf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
