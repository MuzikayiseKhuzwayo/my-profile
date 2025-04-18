import '../css/Footer.css';
import { FaFacebook, FaGithub, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="Footer">
      <footer className="prf-footer">
        <section id="footer">
          <div className="page-text social">
            <a title="Visit Twitter" target="_blank" href="https://x.com/3mk4y_"><FaTwitter /></a>
            <a title="Visit Github" target="_blank" href="https://github.com/MuzikayiseKhuzwayo"><FaGithub /></a>
            <a title="Visit Facebook" target="_blank" href="https://www.facebook.com/profile.php?id=100084963306028"><FaFacebook /></a>
            <a title="Visit Instagram" target="_blank" href="https://instagram.com/3mk4y_"><FaInstagram /></a>
            <a title="Visit YouTube" target="_blank" href="https://www.youtube.com/channel/YOUR_CHANNEL_HERE"><FaYoutube /></a> {/* Replace with your channel URL */}
            <a title="Visit LinkedIn" target="_blank" href="https://www.linkedin.com/in/muzikayise-khuzwayo-4833a916a/"><FaLinkedin /></a>
            <a title="Email Me" href="mailto:your.email@example.com"><FaEnvelope /></a> {/* Replace with your email address */}
          </div>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <a href="https://your-substack-url.substack.com/" target="_blank">Substack</a> {/* Replace with your substack URL */}
          </div>
          <p>&copy; 2025. All Rights Reserved.</p>
        </section>
      </footer>
    </div>
  )
}

export default Footer;