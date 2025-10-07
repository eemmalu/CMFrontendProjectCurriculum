import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Frontend Development Curriculum</h1>
      <p className="intro">
        Welcome to the frontend development curriculum! This interactive course
        will teach you modern web development.
      </p>

      <div className="modules">
        <h2>Getting Started</h2>
        <ol>
          <li>Read the <a href="/README.md">README.md</a> for an overview</li>
          <li>Follow the <a href="/SETUP.md">SETUP.md</a> instructions</li>
          <li>Start with <a href="/module-01-git-html-css/">Module 1</a></li>
        </ol>
      </div>

      <div className="info">
        <h2>Course Structure</h2>
        <p>
          This curriculum consists of 8 modules covering HTML, CSS, JavaScript,
          TypeScript, React, and modern web development tools.
        </p>
        <p>
          Each module includes lessons, exercises, and homework with automated
          testing to validate your work.
        </p>
      </div>
    </div>
  )
}

export default App
