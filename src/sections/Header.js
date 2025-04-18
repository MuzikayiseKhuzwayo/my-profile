import '../css/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <header className="prf-header">
        <nav className="Nav">
          <div className="nav-logo">
            <Link className="active logo" to="/">Muzikayise Khuzwayo</Link>
          </div>
          <div className="nav-right">
            <Link to="/profile">About Me</Link>
            <Link to="/skills">My Skills</Link>
            <Link to="/expertise">My Expertise</Link>
            <Link to="/portfolio">My Portfolio</Link>
            <Link to="/contact">Contact Me</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;