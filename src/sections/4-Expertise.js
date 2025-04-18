import '../css/Body.css'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
// Expertise Section

function Expertise(){
 return(
  <section id="expertise-section" className="all-sections Expertise page-text">
    <div className="container container-1 ">
     <h1>My Expertise</h1>
    </div>
    <div className="container container-2">
     <ul className="exp-list">
      <li>Frontend </li>
      <li>Backend </li>
      <li>Libraries/Tools </li>
      <li>Frameworks </li>
      <li>Version Control </li>
      <li>User Exerience Focused Programming </li>
      <li>Testing and Debugging </li>
      <li>Team Oriented Development </li>
     </ul>
     <ul className="exp-list">
      <li>HTML, CSS, JS</li>
      <li>Python and PHP</li>
      <li>CSS PreCompilers</li>
      <li>ReactJS, NodeJS, ExpressJS</li>
      <li>Git</li>
      <li>UX, Design</li>
      <li>Documentation, Blood-Sweat-and-Tears</li>
      <li>Communication skills, Project Management</li>
     </ul>
    </div>
    <div classname="page-text">
      <h2>How I Got Here</h2>
      <p>My journey began at university, where I built my first automated system—a simple solution to a repetitive coding task. The reaction from my friends? “That’s genius!” That moment sparked something in me: a love for finding smarter, faster solutions to problems.</p>
      <p>Since then, I’ve honed my skills across Make.com, n8n, Airtable, Softr, and beyond—becoming a fullstack developer with expertise in backend automations, databases, and interactive frontend systems.</p>
    </div>
    <div classname="page-text">
      <h2>Why Automation Matters</h2>
      <p>Traditional systems are broken. I’ve experienced it firsthand as a writer for Webnovel, where success was dictated by a brutal algorithm. Despite working 10-hour days, the system prioritised only the newest books, leaving creators fighting a losing battle.</p>
      <p>That’s why I turned to automation—to create systems that put power back in the hands of creators. With automation, you’re not just spinning the hamster wheel—you’re building a machine that works for you.</p>
    </div>
    <div classname="page-text">
      <h2>What You'll Get Working With Me</h2>
      <p>Fully automated systems that operate on autopilot, freeing up your time.</p>
      <p>Strategies designed to increase organic reach and build trust, ensuring long-term success.</p>
      <p>Knowledge and tools that empower you to confidently scale your brand.</p>
    </div>
    <div classname="page-text">
      <h2>My Vision</h2>
      <p>As a South African entrepreneur, I carry the hunger to stand out and make an impact. My goal? To become the greatest in my field—not just locally, but globally. I want to help 1,000 people earn their first $1,000 through automation, proving that smarter systems mean smarter success.</p>
      <p>I believe in building a digital-first business, untethered to any single location. My dream is to become a digital nomad, exploring every country while leaving behind a legacy of innovation and empowerment.</p>
    </div>
    <div className="container container-3"></div>
  </section>
 )
}

export default Expertise