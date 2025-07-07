import React from 'react';

export default function Contact() {
  return (
    <section className="p-8 section bg-gray-100 dark:bg-gray-800">
      <h2 className="section-title">Contact</h2>
      <div className="contact-info text-center text-lg space-y-4">
        <p>
          📧 Email:{" "}
          <a href="mailto:surajkrishna501@gmail.com" className="text-blue-600 hover:underline">
            surajkrishna501@gmail.com
          </a>
        </p>
        <p>
          📞 Phone:{" "}
          <a href="tel:+918445730638" className="text-blue-600 hover:underline">
            +91 8445730638
          </a>
        </p>
        <p>
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/suraj-pratap-singh-54b517240"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            www.linkedin.com/in/suraj-pratap-singh-54b517240
          </a>
        </p>
        <p>
          🌐 GitHub:{" "}
          <a
            href="https://github.com/XT-VECTOR"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            github.com/XT-VECTOR
          </a>
        </p>
      </div>
    </section>
  );
}
