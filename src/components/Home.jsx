import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function Home() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: 'url("/background.jpg")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 dark:from-black/70 dark:to-black/80" />

      {/* Content */}
      <div className="z-10 text-center px-4" data-aos="fade-up">
        {/* 🖼️ Profile Photo */}
        <img
          src="/certificates/My-photo.jpg"
          alt="Suraj Pratap Singh"
          className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg mx-auto mb-6 animate-fadeIn"
        />

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
          Hi, I'm <span className="text-blue-400">Suraj Pratap Singh</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-200 font-semibold mb-4">
          <strong>Frontend Developer</strong>
        </p>

        {/* Bio */}
        <p className="mt-3 text-sm text-gray-300 italic max-w-xl mx-auto">
          Crafting responsive, accessible, and elegant web experiences using modern technologies like React and Tailwind CSS.
        </p>

        {/* Scroll Down Icon */}
        <a
          href="#about"
          className="inline-block mt-16 animate-bounce text-blue-400 hover:text-blue-300 transition"
          aria-label="Scroll to About"
        >
          <FaChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}
