'use client';

import { Github, Linkedin, Mail, Instagram, FileText } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-slate-500 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://github.com/aetzaz63"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-aetzaz-ashraf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors"
            >
              <FileText size={20} />
            </a>
            <a
              href="mailto:aetzaz36@gmail.com"
              className="text-slate-500 hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Muhammad Aetzaz Ashraf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
