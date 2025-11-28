'use client';

import { useState } from 'react';

interface Section {
  id: string;
  title: string;
  content: string;
}

export default function Home() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const sections: Section[] = [
    {
      id: 'early-life',
      title: 'Early Life (About me)',
      content: 'Early life description',
    },
    {
      id: 'rise-to-power',
      title: 'Rise to Power (Previous Experience)',
      content: 'Previous experience description',
    },
    {
      id: 'expansion-of-power',
      title: 'Expansion of Power (Currently)',
      content: 'Currently description',
    },
    {
      id: 'dominion',
      title: 'Dominion (Expertise)',
      content: 'Expertise description',
    },
    {
      id: 'projects',
      title: 'Conquests (Experiences and Projects)',
      content: 'Experiences and Projects description',
    },
    {
      id: 'legacy',
      title: 'Legacy (Awards and Recognition)',
      content: 'Awards and Recognition description',
    },
  ];

  const toggleSection = (id: string) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(id)) {
      newOpenSections.delete(id);
    } else {
      newOpenSections.add(id);
    }
    setOpenSections(newOpenSections);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Title / Profession
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Twitter
            </a>
            <span>•</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              GitHub
            </a>
            <span>•</span>
            <a href="mailto:" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Email
            </a>
          </div>
        </div>

        {/* Timeline Accordion */}
        <div className="space-y-3">
          {sections.map((section, index) => {
            const isOpen = openSections.has(section.id);
            return (
              <div
                key={section.id}
                className="bg-white dark:bg-black rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-800"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <svg
                      className={`w-6 h-6 text-gray-500 dark:text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">
                      {section.title}
                    </h2>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <div className="pl-12 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>Your Name</p>
        </footer>
      </div>
    </main>
  );
}
