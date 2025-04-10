'use client'

import { FaRocket } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'Company One',
      description: 'Creating technology to empower civilians to explore space on their own terms.',
      link: 'https://companyone.com',
    },
    {
      title: 'Company Two',
      description: 'Designing collaborative tools that help teams build faster.',
      link: 'https://companytwo.com',
    },
    {
      title: 'Company Three',
      description: 'Developing mobile experiences to simplify everyday tasks.',
      link: 'https://companythree.com',
    },
    {
      title: 'Company Four',
      description: 'Using AI to create smarter content recommendations.',
      link: 'https://companyfour.com',
    },
    {
      title: 'Company Five',
      description: 'Building education platforms that scale for global access.',
      link: 'https://companyfive.com',
    },
    {
      title: 'Company Six',
      description: 'Empowering small businesses with simple e-commerce tools.',
      link: 'https://companysix.com',
    },
  ]

  return (
    <>
      <main className="max-w-5xl mx-auto px-6 py-16 text-gray-900 dark:text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-center text-base sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et massa mi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 shadow hover:shadow-md transition-shadow"
            >
              <div className="text-3xl text-red-500 mb-3">
                <FaRocket />
              </div>
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 hover:underline break-words"
              >
                {project.link}
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t text-center text-sm text-gray-500 dark:text-gray-400">
        <nav className="flex justify-center space-x-6 mb-2">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/projects" className="hover:underline">Projects</a>
          <a href="/uses" className="hover:underline">Uses</a>
        </nav>
        <p className="mt-4">© {new Date().getFullYear()} Nephi Robertson</p>
      </footer>
    </>
  )
}
