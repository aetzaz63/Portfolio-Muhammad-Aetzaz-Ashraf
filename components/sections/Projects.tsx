'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  year: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
}

const allProjects: Project[] = [
  {
    title: 'Shopify Customer Support Automation',
    year: '2025',
    category: 'n8n Automation',
    description:
      'Developed an advanced AI-powered customer support automation system using n8n and Shopify Admin APIs. Implemented real-time order tracking, product lookup, automated email responses, and conversation memory.',
    technologies: ['n8n', 'Gemini', 'Shopify API', 'Webhooks'],
    image: 'https://images.pexels.com/photos/3943602/pexels-photo-3943602.jpeg',
  },
  {
    title: 'n8n AI-Powered Travel Package Automation',
    year: '2025',
    category: 'n8n Automation',
    description:
      'Built an automated workflow in n8n handling travel package recommendations, booking flow, and user interaction. Integrated OpenAI, webhook triggers, database operations, and decision logic.',
    technologies: ['n8n', 'OpenAI', 'Webhooks', 'Database'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
  },
  {
    title: 'ShopNow E-Commerce Platform',
    year: '2024',
    category: 'Web Development',
    description:
      'Developed a modern, fully responsive e-commerce platform with product listings, cart management, checkout, and authentication. Implemented global state management using Context API.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Context API'],
    image: 'https://images.pexels.com/photos/3865857/pexels-photo-3865857.jpeg',
  },
  {
    title: 'Blog Platform',
    year: '2024',
    category: 'Web Development',
    description:
      'Built a full-featured blogging system with authentication, article CRUD, comments, and reactions. Developed a REST API backend using Express and MongoDB with modern UI practices.',
    technologies: ['Next.js', 'React', 'Express.js', 'MongoDB'],
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
  },
  {
    title: 'End-to-End Data Engineering Pipeline',
    year: '2025',
    category: 'DevOps',
    description:
      'Built a complete ML + Data Engineering pipeline integrating DVC, Apache Airflow, MLflow, Docker, and Kubernetes. Implemented versioning, workflow automation, and CI/CD for machine learning experiments.',
    technologies: ['DVC', 'Apache Airflow', 'MLflow', 'Docker', 'Kubernetes', 'Python'],
    image: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg',
  },
  {
    title: 'BloodBond - Blood Donation App',
    year: '2024',
    category: 'Web Development',
    description:
      'Collaboratively built a blood donation system with user, admin, hospital, and organization modules. Implemented secure authentication and role-based access using JWT and BcryptJS.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
  },
  {
    title: 'Appointment & Scheduling Management System',
    year: '2024',
    category: 'Web Development',
    description:
      'Developed in a team as part of Software Project Management course. Implemented appointment booking with user roles, time slot availability, and notifications using microservice architecture.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Microservices'],
  },
  {
    title: 'Meal Kit Delivery Web App',
    year: '2024',
    category: 'Web Development',
    description:
      'Designed and developed a full-stack web application for meal kit delivery service. Implemented user authentication, cart management, responsive UI, and RESTful APIs for efficient CRUD operations.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
  },
];

const tabs = ['All Projects', 'n8n Automation', 'Web Development', 'DevOps'];

export function Projects() {
  const [activeTab, setActiveTab] = useState('All Projects');

  const getDisplayProjects = (): Project[] => {
    if (activeTab === 'All Projects') {
      return allProjects;
    }
    return allProjects.filter((p) => p.category === activeTab);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              variant={activeTab === tab ? 'default' : 'outline'}
              className={`${
                activeTab === tab
                  ? 'bg-white text-black hover:bg-slate-200'
                  : 'border-white text-white hover:bg-slate-800'
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {getDisplayProjects().map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300 overflow-hidden border border-slate-700 bg-slate-800"
            >
              {project.image && (
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-white">
                    {project.title}
                  </CardTitle>
                  <Badge variant="secondary">{project.year}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-white text-black hover:bg-slate-200"
          >
            <a
              href="https://github.com/aetzaz63?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Load More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
