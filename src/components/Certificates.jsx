import React from 'react';

const certificates = [
  {
    title: 'C - Basics',
    provider: 'LearnTube by CareerNinja',
    date: 'November 16, 2022',
    image: '/certificates/c-basics.jpg', // Place image here
  },
  {
    title: 'Python Development Internship',
    provider: 'OctaNet',
    date: 'September 1 – October 1, 2023',
    image: '/certificates/Internship.jpg',
  },
  {
    title: 'Full Stack Web Developer with AI & ML Integration',
    provider: 'Udemy • 37 Hours • Dr. Ahmad Mohsin',
    date: 'June 16, 2025',
    image: '/certificates/udemy.jpg', // Make sure it's placed in /public/certificates/
  },
];

export default function Certificates() {
  return (
    <section className="p-8 section bg-gray-100 dark:bg-gray-800">
      <h2 className="section-title">Certificates</h2>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
            data-aos="fade-up"
          >
            <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{cert.provider}</p>
            {cert.date && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">📅 {cert.date}</p>
            )}
            {cert.image && (
              <img
                src={cert.image}
                alt={cert.title}
                className="mt-4 rounded shadow max-h-64 object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
