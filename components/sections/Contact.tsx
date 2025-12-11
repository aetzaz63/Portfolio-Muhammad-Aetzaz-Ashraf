'use client';

import { Mail, Phone, MapPin, Linkedin, Github, Instagram, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Contact() {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/aetzaz63', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/muhammad-aetzaz-ashraf', label: 'LinkedIn' },
    { icon: FileText, href: 'https://medium.com', label: 'Medium' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 dark:bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
          <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities, whether it's a freelance project, full-time position, or just a chat about technology and automation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="border border-slate-700 hover:shadow-lg hover:border-orange-600 transition-all bg-slate-900 dark:bg-slate-900">
            <CardContent className="flex flex-col items-center text-center p-8">
              <div className="p-3 bg-orange-600 rounded-full mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">
                Address
              </h3>
              <p className="text-slate-300">
                Current: Islamabad
              </p>
              <p className="text-slate-300">
                Permanent: Gujranwala
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-700 hover:shadow-lg hover:border-orange-600 transition-all bg-slate-900 dark:bg-slate-900">
            <CardContent className="flex flex-col items-center text-center p-8">
              <div className="p-3 bg-orange-600 rounded-full mb-4">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">
                Phone
              </h3>
              <a
                href="tel:+923125956773"
                className="text-slate-300 hover:text-orange-600 transition-colors"
              >
                0312 5956773
              </a>
              <a
                href="tel:+923040096320"
                className="text-slate-300 hover:text-orange-600 transition-colors"
              >
                03040096320
              </a>
            </CardContent>
          </Card>

          <Card className="border border-slate-700 hover:shadow-lg hover:border-orange-600 transition-all bg-slate-900 dark:bg-slate-900">
            <CardContent className="flex flex-col items-center text-center p-8">
              <div className="p-3 bg-orange-600 rounded-full mb-4">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">
                Email
              </h3>
              <a
                href="mailto:aetzaz36@gmail.com"
                className="text-slate-300 hover:text-orange-600 transition-colors break-all"
              >
                aetzaz36@gmail.com
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-slate-900 dark:bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-orange-600 hover:border-orange-600 transition-all duration-300 transform hover:scale-110"
              aria-label={link.label}
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
