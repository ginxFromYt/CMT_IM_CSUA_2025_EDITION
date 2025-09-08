import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import ModuleContent from './components/ModuleContent'
import Footer from './components/Footer'

function App() {
  const [activeModule, setActiveModule] = useState('introduction')

  const modules = [
    {
      id: 'introduction',
      title: 'Introduction to Computer Maintenance',
      description: 'Basic concepts and overview of computer maintenance and troubleshooting'
    },
    {
      id: 'hardware',
      title: 'Hardware Components',
      description: 'Understanding computer hardware components and their functions'
    },
    {
      id: 'software',
      title: 'Software Systems',
      description: 'Operating systems, drivers, and software troubleshooting'
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting Methodology',
      description: 'Systematic approach to diagnosing and solving computer problems'
    },
    {
      id: 'preventive',
      title: 'Preventive Maintenance',
      description: 'Best practices for maintaining computer systems'
    },
    {
      id: 'tools',
      title: 'Tools and Resources',
      description: 'Essential tools and software for computer maintenance'
    }
  ]

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Navigation 
          modules={modules} 
          activeModule={activeModule} 
          setActiveModule={setActiveModule} 
        />
        <ModuleContent 
          module={modules.find(m => m.id === activeModule)} 
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
