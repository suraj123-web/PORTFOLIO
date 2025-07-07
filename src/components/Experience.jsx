import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const experience = [
  {
    role: 'Python Developer Intern',
    company: 'OctaNet Services Pvt. Ltd.',
    logo: '🐍', // replace with an <img> if desired
    date: 'May 2023 – June 2023',
    description:
      'Worked on automation scripts and backend logic using Python. Built small projects and contributed to API integration tasks.',
  },
  
];

export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="p-8 section bg-gray-100 dark:bg-gray-800">
      <h2 className="section-title" data-aos="fade-up">Experience</h2>

      <div className="timeline max-w-2xl mx-auto space-y-6">
        {experience.map((exp, i) => (
          <div
            key={i}
            className="timeline-item border-l-4 border-blue-500 pl-4"
            data-aos="fade-up"
          >
            <h3 className="timeline-title flex items-center gap-2">
              <span className="text-2xl">{exp.logo}</span>
              {exp.role}
              <span className="font-normal text-sm text-gray-500 dark:text-gray-400">– {exp.company}</span>
            </h3>
            <p className="timeline-date">{exp.date}</p>
            <p className="timeline-desc">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* 📄 Resume Button */}
      <div className="text-center mt-10" data-aos="fade-up">
        <a
          href="/RESUME.pdf"
          download
          className="btn-outline inline-block mt-4 px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
}
