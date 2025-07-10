import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about David Urbano, Software Engineer and Web Developer from Lima, Peru.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto text-white">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-red-dalowa mb-4">
          About Me
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Software Engineer passionate about creating exceptional digital experiences
        </p>
      </header>

      <section className="space-y-6">
        <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
          <h2 className="text-2xl font-semibold text-red-dalowa mb-4">Background</h2>
          <p className="text-gray-300 leading-relaxed">
            Based in Lima, Peru, I&apos;m a dedicated software engineer with a passion for 
            modern web technologies. I specialize in React, Next.js, and TypeScript, 
            creating performant and user-friendly applications.
          </p>
        </div>

        <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
          <h2 className="text-2xl font-semibold text-red-dalowa mb-4">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Git', 'SQL', 'NoSQL'].map((skill) => (
              <div key={skill} className="bg-black-dalowa/50 px-3 py-2 rounded-md text-center text-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
          <h2 className="text-2xl font-semibold text-red-dalowa mb-4">Philosophy</h2>
          <blockquote className="text-gray-300 italic text-lg leading-relaxed border-l-4 border-red-dalowa pl-4">
            &quot;Before changing the world, first change yourself.&quot;
            <footer className="text-sm text-red-dalowa font-semibold mt-2">— Canserbero</footer>
          </blockquote>
        </div>
      </section>
    </div>
  )
}
