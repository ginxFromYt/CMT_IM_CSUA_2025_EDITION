import { useState } from 'react'
import './ModuleContent.css'

function ModuleContent({ module }) {
  const [activeSection, setActiveSection] = useState('overview')

  const moduleData = {
    introduction: {
      overview: {
        title: 'Course Overview',
        content: `
          <h3>Welcome to Computer Maintenance and Troubleshooting</h3>
          <p>This course is designed to provide 2nd year students with comprehensive knowledge and practical skills in computer maintenance and troubleshooting.</p>
          
          <h4>Course Objectives:</h4>
          <ul>
            <li>Understand computer hardware components and their functions</li>
            <li>Learn systematic troubleshooting methodologies</li>
            <li>Develop preventive maintenance skills</li>
            <li>Master the use of diagnostic tools and software</li>
            <li>Build problem-solving and analytical thinking skills</li>
          </ul>
          
          <h4>Prerequisites:</h4>
          <ul>
            <li>Basic computer literacy</li>
            <li>Fundamental understanding of computer operations</li>
            <li>IT 115: Introduction to Computing (or equivalent)</li>
          </ul>
        `
      },
      lessons: {
        title: 'Learning Materials',
        content: `
          <h3>Lesson 1: Introduction to Computer Systems</h3>
          <p>Understanding the basic components and architecture of computer systems.</p>
          
          <h4>Key Topics:</h4>
          <ul>
            <li>Computer system components</li>
            <li>Input/Output devices</li>
            <li>System architecture</li>
            <li>Common terminologies</li>
          </ul>
          
          <div class="resource-box">
            <h4>📚 Resources:</h4>
            <ul>
              <li><a href="#" class="resource-link">Computer Architecture Basics (PDF)</a></li>
              <li><a href="#" class="resource-link">Interactive System Diagram</a></li>
              <li><a href="#" class="resource-link">Video: Inside a Computer</a></li>
            </ul>
          </div>
        `
      },
      quiz: {
        title: 'Knowledge Check',
        content: `
          <h3>Module 1 Quiz</h3>
          <div class="quiz-container">
            <div class="question">
              <p><strong>Question 1:</strong> What is the main function of the CPU?</p>
              <div class="quiz-options">
                <label><input type="radio" name="q1" value="a"> Store data permanently</label>
                <label><input type="radio" name="q1" value="b"> Process instructions and data</label>
                <label><input type="radio" name="q1" value="c"> Display information</label>
                <label><input type="radio" name="q1" value="d"> Connect to the internet</label>
              </div>
            </div>
            
            <div class="question">
              <p><strong>Question 2:</strong> Which component is considered volatile memory?</p>
              <div class="quiz-options">
                <label><input type="radio" name="q2" value="a"> Hard Drive</label>
                <label><input type="radio" name="q2" value="b"> SSD</label>
                <label><input type="radio" name="q2" value="c"> RAM</label>
                <label><input type="radio" name="q2" value="d"> ROM</label>
              </div>
            </div>
            
            <button class="submit-quiz">Submit Quiz</button>
          </div>
        `
      }
    },
    hardware: {
      overview: {
        title: 'Hardware Components Overview',
        content: `
          <h3>Computer Hardware Components</h3>
          <p>Understanding the physical components that make up a computer system is essential for effective maintenance and troubleshooting.</p>
          
          <h4>Major Components:</h4>
          <div class="component-grid">
            <div class="component-card">
              <h5>🔧 Motherboard</h5>
              <p>The main circuit board connecting all components</p>
            </div>
            <div class="component-card">
              <h5>⚡ Power Supply (PSU)</h5>
              <p>Converts AC power to DC power for components</p>
            </div>
            <div class="component-card">
              <h5>🧠 Processor (CPU)</h5>
              <p>Executes instructions and performs calculations</p>
            </div>
            <div class="component-card">
              <h5>💾 Memory (RAM)</h5>
              <p>Temporary storage for active programs and data</p>
            </div>
            <div class="component-card">
              <h5>💿 Storage Devices</h5>
              <p>Hard drives, SSDs for permanent data storage</p>
            </div>
            <div class="component-card">
              <h5>🎮 Graphics Card (GPU)</h5>
              <p>Processes visual data and graphics rendering</p>
            </div>
          </div>
        `
      },
      lessons: {
        title: 'Hardware Troubleshooting',
        content: `
          <h3>Common Hardware Issues and Solutions</h3>
          
          <div class="troubleshooting-guide">
            <div class="issue-card">
              <h4>🔴 Computer Won't Turn On</h4>
              <p><strong>Possible Causes:</strong></p>
              <ul>
                <li>Power supply failure</li>
                <li>Loose power connections</li>
                <li>Faulty power button</li>
                <li>Dead motherboard</li>
              </ul>
              <p><strong>Troubleshooting Steps:</strong></p>
              <ol>
                <li>Check power cable connections</li>
                <li>Test power outlet with another device</li>
                <li>Inspect PSU switch and connections</li>
                <li>Try different power cable</li>
                <li>Test PSU with multimeter</li>
              </ol>
            </div>
            
            <div class="issue-card">
              <h4>🔵 System Crashes/Blue Screen</h4>
              <p><strong>Possible Causes:</strong></p>
              <ul>
                <li>Faulty RAM</li>
                <li>Overheating</li>
                <li>Driver conflicts</li>
                <li>Hardware incompatibility</li>
              </ul>
              <p><strong>Troubleshooting Steps:</strong></p>
              <ol>
                <li>Run memory diagnostic tests</li>
                <li>Check system temperatures</li>
                <li>Update or rollback drivers</li>
                <li>Test hardware components individually</li>
              </ol>
            </div>
          </div>
        `
      },
      quiz: {
        title: 'Hardware Knowledge Test',
        content: `
          <h3>Hardware Module Quiz</h3>
          <div class="quiz-container">
            <div class="question">
              <p><strong>Question 1:</strong> What is the most likely cause if a computer turns on but displays nothing on screen?</p>
              <div class="quiz-options">
                <label><input type="radio" name="h1" value="a"> Faulty power supply</label>
                <label><input type="radio" name="h1" value="b"> Loose RAM or graphics card</label>
                <label><input type="radio" name="h1" value="c"> Bad hard drive</label>
                <label><input type="radio" name="h1" value="d"> Virus infection</label>
              </div>
            </div>
            
            <button class="submit-quiz">Submit Quiz</button>
          </div>
        `
      }
    },
    // Add more modules here...
  }

  const currentModule = moduleData[module?.id] || {}
  const sections = Object.keys(currentModule)

  if (!module) {
    return <div className="module-content">Please select a module</div>
  }

  return (
    <div className="module-content">
      <div className="module-header">
        <h2>{module.title}</h2>
        <p>{module.description}</p>
      </div>
      
      <div className="section-tabs">
        {sections.map(section => (
          <button
            key={section}
            className={`section-tab ${activeSection === section ? 'active' : ''}`}
            onClick={() => setActiveSection(section)}
          >
            {currentModule[section]?.title || section}
          </button>
        ))}
      </div>
      
      <div className="section-content">
        <div dangerouslySetInnerHTML={{ 
          __html: currentModule[activeSection]?.content || '<p>Content coming soon...</p>' 
        }} />
      </div>
    </div>
  )
}

export default ModuleContent
