'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function AboutContent() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-900 dark:text-white">
      {/* Profile & Intro */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-8">
        {/* Profile Image */}
        <div className="shrink-0 mx-auto sm:mx-0">
          <Image
            src="/nephi.jpg"
            alt="Nephi Robertson profile"
            width={300}
            height={400}
            className="rounded-lg object-cover shadow-md w-[240px] sm:w-[280px] md:w-[300px]"
          />
        </div>

        {/* Intro Text */}
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            I’m Nephi. I live in Utah, where I develop the future.
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-base sm:text-lg">
            I’m passionate about clean, accessible design and building digital experiences that uplift others.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-base sm:text-lg">
            I write code, teach others, and try to build tools that make people’s lives easier.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
            Outside of coding, I’m a lifelong learner who’s always curious.
            I believe technology is a gift that should uplift others.
          </p>
        </div>
      </div>

      {/* Contact + Social */}
      <div className="mt-12 space-y-3 text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
        <p>📍 Based in Utah</p>
        <p>📧 nephi@email.com</p>
        <p>💻 Open to freelance or full-time work</p>
        <div className="flex justify-center sm:justify-start gap-4 text-lg mt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Footer Nav */}
      <footer className="mt-16 border-t pt-8 text-sm text-center text-gray-500 dark:text-gray-400">
        <nav className="flex justify-center space-x-6 mb-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/uses">Uses</Link>
        </nav>
        <p className="mt-4">© {new Date().getFullYear()} Nephi Robertson</p>
      </footer>
    </main>
  )
}
