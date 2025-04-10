'use client'

export default function UsesContent() {
  const gear = [
    {
      category: 'Workstation',
      items: [
        '16” MacBook Pro, M2 Pro, 16GB RAM (2023)',
        'LG UltraFine 5K Display',
        'Keychron K6 Keyboard',
        'Logitech MX Master 3 Mouse',
      ],
    },
    {
      category: 'Development Tools',
      items: [
        'Visual Studio Code',
        'iTerm2 with zsh + oh-my-zsh',
        'Figma',
        'Postman',
        'GitHub Copilot',
      ],
    },
    {
      category: 'Design & Productivity',
      items: [
        'Figma',
        'Notion',
        'Raycast',
        'CleanShot X',
        'Spotify',
      ],
    },
  ];

  return (
    <>
      <main className="max-w-4xl mx-auto px-6 py-16 text-gray-900 dark:text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left">Uses</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl text-base sm:text-lg text-center sm:text-left">
          Here’s what I use on a daily basis to design, code, and stay productive — both professionally and personally.
        </p>

        <div className="space-y-12">
          {gear.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">{section.category}</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="border-b border-gray-200 dark:border-gray-700 pb-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

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
  );
}
