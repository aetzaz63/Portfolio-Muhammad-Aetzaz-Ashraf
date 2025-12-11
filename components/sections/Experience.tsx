'use client';

import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'CODIRO Technologies',
    location: 'Onsite',
    period: 'Sept 2025 - Present',
    description: [
      'Building high-performance web applications using Next.js, React.js, and REST APIs',
      'Developing scalable backend services with Node.js and Express.js',
      'Collaborating with cross-functional teams to design optimized and user-centric solutions',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border border-slate-700 bg-slate-800">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-700 rounded-lg">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-slate-300">
                        {exp.company}
                      </p>
                      <p className="text-sm text-slate-400">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-400 flex items-start gap-2"
                    >
                      <span className="text-white mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
