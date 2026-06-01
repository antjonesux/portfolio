import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Approach from './components/Approach'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'

export default function App() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <Nav />
      <Hero />
      <Work onProjectClick={setActiveProject} />
      <About />
      <Capabilities />
      <Approach />
      <Contact />
      <Footer />

      {activeProject && (
        <ProjectModal
          projectKey={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  )
}
