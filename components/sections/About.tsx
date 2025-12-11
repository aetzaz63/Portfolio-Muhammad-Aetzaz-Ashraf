'use client';

import { GraduationCap, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <p className="text-lg text-slate-400 leading-relaxed">
              I'm a software engineer with industrial experience, graduated from FAST NUCES, Islamabad with a Silver Medal. I specialize in creating efficient automation workflows using n8n and building scalable web applications.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              My expertise spans across the MERN stack, PHP development, Python, and modern DevOps practices. I'm particularly passionate about AI integration and workflow automation that helps businesses streamline their operations.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="border-l-4 border-l-white bg-slate-800 border-slate-700">
              <CardContent className="flex items-start gap-4 p-6">
                <GraduationCap className="text-white flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">
                    Education
                  </h3>
                  <p className="text-slate-400">
                    BS Software Engineering
                  </p>
                  <p className="text-sm text-slate-500">FAST-NUCES | June 2025</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-white bg-slate-800 border-slate-700">
              <CardContent className="flex items-start gap-4 p-6">
                <MapPin className="text-white flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">
                    Location
                  </h3>
                  <p className="text-slate-400">
                    Permanent: Gujranwala, Pakistan
                  </p>
                  <p className="text-slate-400">
                    Current: Islamabad, Pakistan
                  </p>
                  <p className="text-sm text-slate-500">Available for remote & onsite</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-white bg-slate-800 border-slate-700">
              <CardContent className="flex items-start gap-4 p-6">
                <Briefcase className="text-white flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">
                    Current Role
                  </h3>
                  <p className="text-slate-400">
                    Software Engineer
                  </p>
                  <p className="text-sm text-slate-500">CODIRO Technologies | Sept 2025 - Present</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
