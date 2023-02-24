import '../css/Footer.css';
import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

/* Footer should have socials again. just to make it a point
  Create those docs in seperate JS files and import them at the top.  */
function Footer() {
  return (
    <div className="Footer">
      <footer className="prf-footer">
       <section id="footer">
        <div className="page-text social">
          <a title="Visit Twitter" target="_blank" href="#about-section"><FaTwitter /></a>
          <a title="Visit Github" target="_blank" href="#about-section"><FaGithub /></a>
          <a title="Visit Facebook" target="_blank" href="#about-section"><FaFacebook /></a>
          <a title="Visit Instagram" target="_blank" href="#about-section"><FaInstagram /></a>
        </div>
        <p>&copy; 2022. All Rights Reserved.</p>
       </section>
      </footer>
     </div>
  )
}

export default Footer
