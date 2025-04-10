import './globals.css'
import Link from 'next/link'
import ThemeToggle from '../components/ThemeToggle'

export const metadata = {
  title: 'My Portfolio',
  description: 'Built with Next.js + Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="py-10">
          <div className="flex justify-center">
            <nav className="flex items-center space-x-6 rounded-full border px-6 py-2 shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">Home</Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">About</Link>
              <Link href="/projects" className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">Projects</Link>
              <Link href="/uses" className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">Uses</Link>
            </nav>
          </div>
          <div className="absolute top-6 right-6">
            <ThemeToggle />
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-8">
          © {new Date().getFullYear()} Nephi Robertson
        </footer>
      </body>
    </html>
  )
}
