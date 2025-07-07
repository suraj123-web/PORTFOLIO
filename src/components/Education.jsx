import React from 'react';

export default function Education() {
  return (
    <section className="p-8 section bg-gray-100 dark:bg-gray-800">
      <h2 className="section-title">Education</h2>
      <div className="max-w-xl mx-auto">
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300">
          <h3 className="text-xl font-semibold">Bachelor of Technology (B.Tech)</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            Hindustan College of Science and Technology, Mathura (AKTU)
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">2021 – 2025</p>
          <p>
            Pursuing B.Tech in Computer Science and Engineering with a strong focus on frontend development,
            IoT-based systems, and project-based learning in technologies like React, Tailwind CSS, and JavaScript.
          </p>
        </div>
      </div>
    </section>
  );
}
