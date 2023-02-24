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
      <li><FaArrowRight className="ico-col-1"/></li>
      <li><FaArrowRight className="ico-col-2"/></li>
      <li><FaArrowRight className="ico-col-3"/></li>
      <li><FaArrowRight className="ico-col-4"/></li>
      <li><FaArrowRight className="ico-col-5"/></li>
      <li><FaArrowRight className="ico-col-6"/></li>
      <li><FaArrowRight className="ico-col-7"/></li>
      <li><FaArrowRight className="ico-col-8"/></li>
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
     <ul className="exp-list">
      <li><FaCheck className="ico-col-1"/><FaCheck className="ico-col-1"/></li>
      <li><FaCheck className="ico-col-2"/><FaCheck className="ico-col-2"/></li>
      <li><FaCheck className="ico-col-3"/><FaCheck className="ico-col-3"/></li>
      <li><FaCheck className="ico-col-4"/><FaCheck className="ico-col-4"/></li>
      <li><FaCheck className="ico-col-5"/><FaCheck className="ico-col-5"/></li>
      <li><FaCheck className="ico-col-6"/><FaCheck className="ico-col-6"/></li>
      <li><FaCheck className="ico-col-7"/><FaCheck className="ico-col-7"/></li>
      <li><FaCheck className="ico-col-8"/><FaCheck className="ico-col-8"/></li>
     </ul>
    </div>
    <div className="container container-3"></div>
  </section>
 )
}

export default Expertise