import '../css/Body.css'

// Skills Section. CSS, JS, PHP, MySQL. Add some CSS which makes the numbers count up on hover

// function countUp(num){
//  const cntHTML = document.getElementById("cnt-html")
//  const cntCSS = document.getElementById("cnt-css")
//  const cntJS = document.getElementById("cnt-js")
//  const cntPHP = document.getElementById("cnt-php")
//  const cntMySQL = document.getElementById("cnt-mysql")

//  const cntEl = [cntHTML, cntCSS, cntJS, cntPHP, cntMySQL]
//  // const proficiencies=[89, 85, 80, 37, 30]
//  //  //restart value at 0
//  //  //Add to the textContent variable of the target at specified times until it reaces max which is proficiencies[num]
//  // for (var i=0; i<=proficiencies[num]; i++){
//  //  cntEl[num].textContent = i;
//  // }

//  cntEl[num].textContent="Fuck this"
// }

import {FaHtml5, FaCss3, FaPhp, FaJs, FaNodeJs, FaPython, FaReact} from 'react-icons/fa'

function Skills(){
 return(
  <section id="skills-section" className="all-sections page-text Skills">
   <div className="container container-1">
    <h1>My Skill Proficiencies</h1>
   </div>
   <div className="container container-2">
    <div class="container container-5 page-text">
     <div className="skl-counter html">
      <h1><FaHtml5 className="html"/></h1>
      <h2>HTML : <span className="counter html" id="cnt-html"></span>%</h2>
     </div>
     <div className="skl-counter css">
      <h1><FaCss3 className="css"/></h1>
      <h2>CSS : <span className="counter css" id="cnt-css"></span>%</h2>
     </div>
     <div className="skl-counter js">
      <h1><FaJs className="js"/></h1>
      <h2>JS : <span className="counter js" id="cnt-js"></span>%</h2>
     </div>
     <div className="skl-counter php">
      <h1><FaPhp className="php"/></h1>
      <h2>PHP : <span className="counter php" id="cnt-php"></span>%</h2>
     </div>
     <div className="skl-counter python">
      <h1><FaPython className="python"/></h1>
      <h2>Python : <span className="counter python" id="cnt-python"></span>%</h2>
     </div>
     </div>
     <div className="container container-5">
     <div className="skl-counter reactjs">
      <h1><FaReact className="reactjs"/></h1>
      <h2>ReactJS : <span className="counter reactjs" id="cnt-reactjs"></span>%</h2>
     </div>
     <div className="skl-counter nodejs">
      <h1><FaNodeJs className="nodejs"/></h1>
      <h2>NodeJS : <span className="counter nodejs" id="cnt-nodejs"></span>%</h2>
     </div>
    </div>
   </div>
   <div class="container container-3"> 
   </div>
  </section>
 )
}

export default Skills