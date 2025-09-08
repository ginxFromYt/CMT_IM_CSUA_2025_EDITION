import './Navigation.css'

function Navigation({ modules, activeModule, setActiveModule }) {
  return (
    <nav className="navigation">
      <h3>Course Modules</h3>
      <ul className="module-list">
        {modules.map(module => (
          <li key={module.id}>
            <button
              className={`module-button ${activeModule === module.id ? 'active' : ''}`}
              onClick={() => setActiveModule(module.id)}
            >
              <span className="module-title">{module.title}</span>
              <span className="module-description">{module.description}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
