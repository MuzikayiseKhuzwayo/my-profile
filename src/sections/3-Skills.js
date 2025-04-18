import {FaHtml5, FaCss3, FaPhp, FaJs, FaNodeJs, FaPython, FaReact} from 'react-icons/fa'
import { useEffect } from 'react';

function Skills(){
  useEffect(() => {
    const counters = {
      html: 95,
      css: 90,
      js: 80,
      php: 70,
      python: 75,
      reactjs: 85,
      nodejs: 65,
      n8n: 92,
      make: 88,
      airtable: 90,
      softr: 82
    };

    Object.keys(counters).forEach(skill => {
      const target = counters[skill];
      const element = document.getElementById(`cnt-${skill}`);

      if (element) {
        let count = 0;
        const increment = target / 200; // Adjust speed of count-up

        const updateCounter = () => {
          if (count < target) {
            count += increment;
            element.innerText = Math.ceil(count);
            setTimeout(updateCounter, 10); // Interval for animation
          } else {
            element.innerText = target;
          }
        };

        updateCounter();
      }
    });
  }, []);

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
          <div className="skl-counter n8n">
            <h1>N8N</h1>
            <h2>N8N : <span className="counter n8n" id="cnt-n8n"></span>%</h2>
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
          <div className="skl-counter make">
            <h1>Make</h1>
            <h2>Make : <span className="counter make" id="cnt-make"></span>%</h2>
          </div>
          <div className="skl-counter airtable">
            <h1>Airtable</h1>
            <h2>Airtable : <span className="counter airtable" id="cnt-airtable"></span>%</h2>
          </div>
          <div className="skl-counter softr">
            <h1>Softr</h1>
            <h2>Softr : <span className="counter softr" id="cnt-softr"></span>%</h2>
          </div>
        </div>
      </div>
      <div class="container container-3"> 
      </div>
    </section>
  )
}

export default Skills;