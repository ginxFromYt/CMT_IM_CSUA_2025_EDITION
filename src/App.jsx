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
      id: 'pc-trouble',
      title: 'PC Trouble Fundamentals',
      description: 'Understanding PC problems, hardware vs software issues, and quick fixes'
    },
    {
      id: 'startup-problems',
      title: 'Startup Problems',
      description: 'Boot process, POST, startup options, and operating system initialization'
    },
    {
      id: 'disk-configuration',
      title: 'Disk Configuration',
      description: 'Mass storage, disk utilities, drive management, and partitioning'
    },
    {
      id: 'monitor-internal',
      title: 'Monitor & Internal Issues',
      description: 'Display troubleshooting, internal components, and power management'
    },
    {
      id: 'peripherals-software',
      title: 'Peripherals & Software',
      description: 'Printer problems, peripheral troubleshooting, and software installation'
    },
    {
      id: 'tools-security',
      title: 'Tools, Security & Performance',
      description: 'System utilities, PC security, backup and restore, and performance optimization'
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
