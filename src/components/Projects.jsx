import React from 'react';

const projectList = [
  {
    title: 'Smart IoT Waste Management System',
    description:
      'Built a smart waste monitoring system using IoT sensors and microcontrollers. Enables efficient garbage tracking and automated alerts using embedded hardware and real-time data.',
  },
  {
    title: 'YouTube UI Clone',
    description:
      'Created a responsive YouTube UI clone using HTML, CSS, and JavaScript with API integration. Mimics YouTube layout and functionality including video cards, search, and responsiveness.',
  },
  {
    title: 'Bank Management System',
    description:
      'Developed a bank management app using core Java concepts. Features include account creation, balance check, and secure login—all handled through a simple CLI interface.',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern personal portfolio built with React, Tailwind CSS, and Vite. Includes dark mode, responsive layout, reusable components, and project highlights.',
  },
  
];

export default function Projects() {
  return (
    <section className="p-6 sm:p-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="section-title">Projects</h2>

      <div className="flex gap-4 flex-wrap justify-center mb-8">
        <a href="#contact">
          <button className="btn-primary">Contact Me</button>
        </a>
        <a href="/resume.pdf" download>
          <button className="btn-outline">📄 See Resume</button>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
