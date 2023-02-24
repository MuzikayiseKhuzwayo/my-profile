import '../css/Body.css';
import {FaFacebook, FaTwitter, FaGithub, FaInstagram, FaFileDownload} from 'react-icons/fa'

// This is the Home cover screen thingy, where the person will land.

function Home(){
 return(
  <section className="Home" id="top">
   <div className="page-text">
    <h1>Muzikayise Khuzwayo</h1>
    <h2>Professional Frontend Developer, Freelancer, All-Round Chilled Guy</h2>
    <div className="socials">
     <a title="Download CV" href="#about-section"><FaFileDownload /></a>
     <a title="Visit Twitter" target="_blank" href="#about-section"><FaTwitter /></a>
     <a title="Visit Github" target="_blank" href="#about-section"><FaGithub /></a>
     <a title="Visit Facebook" target="_blank" href="#about-section"><FaFacebook /></a>
     <a title="Visit Instagram" target="_blank" href="#about-section"><FaInstagram /></a>
    </div>
    
    <div className="button">
     <a href="#profile-section">Find out More</a>
     <a href="#contact-section">Hire Me Now!</a>
    </div>
   </div>
  </section>
 )
}

export default Home