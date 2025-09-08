import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>IT 216: Computer Maintenance and Troubleshooting</h4>
          <p>Cagayan State University - College of Information and Computing Sciences</p>
          <p>School Year 2024-2025 | First Semester</p>
        </div>
        <div className="footer-section">
          <h5>Course Information</h5>
          <ul>
            <li><a href="#syllabus">Course Syllabus</a></li>
            <li><a href="#grading">Grading System</a></li>
            <li><a href="#schedule">Class Schedule</a></li>
            <li><a href="#policies">Course Policies</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Learning Resources</h5>
          <ul>
            <li><a href="#textbook">Primary Textbook</a></li>
            <li><a href="#tools">Diagnostic Tools</a></li>
            <li><a href="#videos">Video Tutorials</a></li>
            <li><a href="#lab">Laboratory Guides</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Cagayan State University - CICS. Educational materials for IT 216.</p>
      </div>
    </footer>
  )
}

export default Footer
