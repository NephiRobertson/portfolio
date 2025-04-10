'use client'

import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter, FaLaptopCode } from 'react-icons/fa'
import {
  SiSpotify,
  SiAmazon,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from 'react-icons/si'

export default function Home() {
  const workHistory = [
    { company: 'Spotify', icon: <SiSpotify className="text-green-500" />, year: '2021–Now' },
    { company: 'Amazon', icon: <SiAmazon className="text-yellow-500" />, year: '2019–2021' },
    { company: 'Microsoft', icon: <FaLaptopCode className="text-blue-500" />, year: '2018–2019' },
  ]

  const skills = [
    { name: 'HTML', icon: <SiHtml5 className="text-green-500" />, level: 'w-[90%]', color: 'bg-green-500' },
    { name: 'CSS', icon: <SiCss3 className="text-yellow-400" />, level: 'w-[85%]', color: 'bg-yellow-400' },
    { name: 'JavaScript', icon: <SiJavascript className="text-blue-500" />, level: 'w-[80%]', color: 'bg-blue-500' },
  ]

  return (
    <>
      <main className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-900 dark:text-white">
        {/* Left Content */}
        <section className="col-span-1 md:col-span-2 space-y-10">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="shrink-0">
              <Image
                src="/home.jpg"
                alt="Nephi Robertson"
                width={100}
                height={100}
                className="rounded-full object-cover w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]"
              />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Nephi Robertson</p>
              <h1 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 text-gray-700 dark:text-gray-300">
                Software engineer and believer
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-6 mt-2 sm:mt-0 text-gray-600 dark:text-gray-300">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="hover:text-blue-600 transition" size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="hover:text-black dark:hover:text-white transition" size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter className="hover:text-gray-800 transition" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Articles */}
          <div className="space-y-10 pt-6">
            {[
              {
                title: 'Lorem ipsum dolor sit amet',
                date: 'December 31, 2023',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et minus ea Lorem ipsum dolor sit amet.',
              },
              {
                title: 'Lorem ipsum dolor sit amet',
                date: 'December 30, 2023',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et minus ea Lorem ipsum dolor sit amet.',
              },
              {
                title: 'Lorem ipsum dolor sit amet',
                date: 'December 29, 2023',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et minus ea Lorem ipsum dolor sit amet.',
              },
            ].map((article, i) => (
              <article key={i} className="border-b pb-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{article.date}</p>
                <h2 className="text-xl font-semibold mb-1">{article.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-1">{article.description}</p>
                <a href="#" className="text-gray-700 hover:underline text-sm inline-block mt-2">
                  Read article →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Sidebar */}
        <aside className="space-y-12 pt-10 md:pt-0 border-t md:border-t-0 md:border-l md:pl-6 border-gray-200 dark:border-gray-700">
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Stay up to date</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Get notified when I publish something new, and unsubscribe at any time.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md sm:rounded-l-md border dark:border-gray-700 bg-white dark:bg-gray-800 text-sm mb-2 sm:mb-0"
              />
              <button
                type="submit"
                className="bg-gray-900 dark:bg-white text-white dark:text-black text-sm px-4 py-2 rounded-md sm:rounded-l-none"
              >
                Join
              </button>
            </form>
          </div>

          {/* Work History */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Work</h3>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              {workHistory.map((job, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="text-xl">{job.icon}</div>
                  <div className="flex-1">
                    <div className="font-medium">{job.company}</div>
                    <div className="text-xs text-gray-500">{job.year}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="text-xl">{skill.icon}</div>
                    <p className="text-sm">{skill.name}</p>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div className={`h-full ${skill.color} rounded-full ${skill.level}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t text-center text-sm text-gray-500 dark:text-gray-400">
        <nav className="flex justify-center space-x-6 mb-2">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/projects" className="hover:underline">Projects</a>
          <a href="/uses" className="hover:underline">Uses</a>
        </nav>
        <p>© 2025 Nephi Robertson</p>
      </footer>
    </>
  )
}
