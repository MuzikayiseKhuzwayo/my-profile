import '../css/Header.css';

/* Header should have links to document stuff
  Create those docs in seperate JS files and import them at the top.  */
function Header() {
  return (
    <div className="Header">
      <header className="prf-header">
        <nav className="Nav">
          <div className="nav-logo">
            <a className="active logo" href="#top">Muzikayise Khuzwayo</a>
          </div>
          <div className="nav-right">
            <a  href="#about-section">About Me</a>
            <a  href="#passion-section">My Passions</a>
            <a  href="#skills-section">My Skills</a>
            <a  href="#projects-section">My Projects</a>
            <a  href="#contact-section">Contact Me</a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
