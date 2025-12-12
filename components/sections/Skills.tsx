'use client';

import { Code, Database, Wrench, Package, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['JavaScript', 'Python', 'TypeScript', 'C++', 'C#', 'Java', 'SQL'],
  },
  {
    title: 'Web Technologies',
    icon: Package,
    skills: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'SQL',
      'Git',
      'Tailwind CSS',
      'Postman',
    ],
  },
  {
    title: 'Automation Workflows',
    icon: Zap,
    skills: ['n8n', 'Zapier', 'Make.com'],
  },
  {
    title: 'DevOps Tools',
    icon: Wrench,
    skills: ['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Others',
    icon: Database,
    skills: ['DVC', 'MLflow', 'Apache Airflow', 'JWT', 'BcryptJS'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300 border border-slate-800 bg-slate-900/40 hover:border-blue-600/50"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white text-base">
                    <div className="p-2 bg-blue-600/20 rounded-lg">
                      <Icon className="text-blue-400" size={20} />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs px-2 py-1 bg-slate-800/50 text-slate-400 hover:bg-blue-600/30 hover:text-blue-300 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
