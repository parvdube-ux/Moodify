export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-divider" />

      <div className="footer-content">
        <div className="footer-brand">
          <h3>Moodify</h3>
          <p>Detect and Vibe!</p>
        </div>

        <div className="footer-built-with">
          <span>Built with</span>
          <p>React • Express • MongoDB • Node.js • Mediapipe</p>
        </div>

        <div className="footer-links">
          <a href="https://github.com/parvdube-ux" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/parv-dube-1266b0334" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <p className="footer-copy">© 2026</p>
    </footer>
  );
}
