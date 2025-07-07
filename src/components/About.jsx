import React from 'react';

export default function About() {
  return (
    <section className="p-8 bg-gray-100 dark:bg-gray-800 section">
      <h2 className="section-title">About Me</h2>
      <p className="about-text">
        I'm <strong>Suraj Pratap Singh</strong>, a passionate Frontend Developer with strong fundamentals in
        <span className="text-blue-600 dark:text-blue-400"> HTML</span>, <span className="text-blue-600 dark:text-blue-400">CSS</span>, <span className="text-blue-600 dark:text-blue-400">JavaScript</span>, and modern frameworks like <span className="text-blue-600 dark:text-blue-400">React.js</span> and <span className="text-blue-600 dark:text-blue-400">Tailwind CSS</span>.
        <br /><br />
        I enjoy building clean, responsive, and user-friendly interfaces, and I’m always curious to learn new technologies. I've worked on real-world projects such as a smart IoT-based waste management system, a responsive YouTube clone using API integration, and a dynamic banking management platform.
        <br /><br />
        I’m currently pursuing my <strong>B.Tech in Computer Science & Engineering</strong> at H.C.S.T. Mathura (2021–2025), and I’ve also completed a Python Developer internship at OctaNet Infotech.
      </p>
    </section>
  );
}
