function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12 sm:px-8 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Frontend Development Curriculum
          </h1>
          <p className="text-xl text-indigo-600 dark:text-indigo-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to the frontend development curriculum! This interactive course
            will teach you modern web development.
          </p>
        </div>

        {/* Getting Started Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Getting Started
          </h2>
          <ol className="space-y-4 text-left">
            <li className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
              <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full flex items-center justify-center font-semibold">1</span>
              <span>Read the <a href="/README.md" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 underline decoration-2 underline-offset-2 transition-colors">README.md</a> for an overview</span>
            </li>
            <li className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
              <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full flex items-center justify-center font-semibold">2</span>
              <span>Follow the <a href="/SETUP.md" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 underline decoration-2 underline-offset-2 transition-colors">SETUP.md</a> instructions</span>
            </li>
            <li className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
              <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full flex items-center justify-center font-semibold">3</span>
              <span>Start with <a href="/module-01-git-html-css/" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 underline decoration-2 underline-offset-2 transition-colors">Module 1</a></span>
            </li>
          </ol>
        </div>

        {/* Course Structure Card */}
        <div className="bg-indigo-600 dark:bg-indigo-800 rounded-2xl shadow-xl p-8 text-white hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold mb-6">
            Course Structure
          </h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              This curriculum consists of <span className="font-bold">8 modules</span> covering HTML, CSS, JavaScript,
              TypeScript, React, and modern web development tools.
            </p>
            <p className="text-lg leading-relaxed">
              Each module includes lessons, exercises, and homework with <span className="font-bold">automated
              testing</span> to validate your work.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
