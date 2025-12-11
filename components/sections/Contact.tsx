'use client';

import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities, whether it's a freelance project, full-time position, or just a chat about technology and automation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border border-slate-700 hover:shadow-lg transition-shadow bg-slate-800">
            <CardContent className="flex flex-col items-center text-center p-8">
              <div className="p-3 bg-slate-700 rounded-full mb-4">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">
                Email
              </h3>
              <a
                href="mailto:aetzaz36@gmail.com"
                className="text-slate-400 hover:text-white transition-colors break-all"
              >
                aetzaz36@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="border border-slate-700 hover:shadow-lg transition-shadow bg-slate-800">
            <CardContent className="flex flex-col items-center text-center p-8">
              <div className="p-3 bg-slate-700 rounded-full mb-4">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">
                Phone
              </h3>
              <a
                href="tel:+923125956773"
                className="text-slate-400 hover:text-white transition-colors"
              >
                +92 312 5956773
              </a>
            </CardContent>
          </Card>

          <Card className="border border-slate-700 hover:shadow-lg transition-shadow bg-slate-800">
            <CardContent className="flex flex-col items-center text-center p-8">
              <div className="p-3 bg-slate-700 rounded-full mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">
                Location
              </h3>
              <p className="text-slate-400">
                Islamabad, Pakistan
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          <Button
            size="lg"
            asChild
            className="gap-2 bg-white text-black hover:bg-slate-200"
          >
            <a
              href="https://linkedin.com/in/muhammad-aetzaz-ashraf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </Button>
          <Button
            size="lg"
            asChild
            variant="outline"
            className="gap-2 border-white text-white hover:bg-slate-800"
          >
            <a
              href="https://github.com/aetzaz63"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
