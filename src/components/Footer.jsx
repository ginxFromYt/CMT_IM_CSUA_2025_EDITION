import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>IT 216: Computer Maintenance and Troubleshooting</h4>
          <p>Comprehensive instructional materials for 2nd year students</p>
        </div>
        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#syllabus">Course Syllabus</a></li>
            <li><a href="#resources">Additional Resources</a></li>
            <li><a href="#support">Technical Support</a></li>
            <li><a href="#contact">Contact Instructor</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Resources</h5>
          <ul>
            <li><a href="#downloads">Downloads</a></li>
            <li><a href="#tools">Diagnostic Tools</a></li>
            <li><a href="#references">References</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 IT Department. Educational use only.</p>
      </div>
    </footer>
  )
}

export default Footer
