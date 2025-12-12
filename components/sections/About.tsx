'use client';

import { GraduationCap, MapPin, Award, Target, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function About() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a software engineer with industrial experience, graduated from FAST NUCES, Islamabad with a Silver Medal. I specialize in creating efficient automation workflows using n8n and building scalable web applications.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My expertise spans across the MERN stack, PHP development, Python, and modern DevOps practices. I'm particularly passionate about AI integration and workflow automation that helps businesses streamline their operations.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 transition-all duration-300 transform hover:scale-105"
              >
                <Download size={20} />
                <a href="/aetzaz_resume.pdf" download>
                  Download Resume
                </a>
              </Button>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="gap-2 bg-slate-700 hover:bg-slate-600 text-white px-8 transition-all duration-300 transform hover:scale-105"
              >
                Hire Me
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-l-4 border-l-blue-600 bg-slate-900/50 border-slate-700">
              <CardContent className="flex items-start gap-4 p-6">
                <GraduationCap className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-base text-white mb-1">
                    Education
                  </h3>
                  <p className="text-slate-300 text-sm">
                    BS Software Engineering
                  </p>
                  <p className="text-xs text-slate-500">FAST-NUCES | June 2025</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600 bg-slate-900/50 border-slate-700">
              <CardContent className="flex items-start gap-4 p-6">
                <Award className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-base text-white mb-1">
                    Experience
                  </h3>
                  <p className="text-slate-300 text-sm">
                    1+ Years
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600 bg-slate-900/50 border-slate-700">
              <CardContent className="flex items-start gap-4 p-6">
                <Target className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-base text-white mb-1">
                    Specialization
                  </h3>
                  <p className="text-slate-300 text-sm">
                    MERN Stack Developer and AI Automations
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600 bg-slate-900/50 border-slate-700">
              <CardContent className="flex items-start gap-4 p-6">
                <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-base text-white mb-1">
                    Location
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Current: Islamabad
                  </p>
                  <p className="text-slate-300 text-sm">
                    Permanent: Gujranwala
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
