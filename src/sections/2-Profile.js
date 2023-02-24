import '../css/Body.css'

// About Section

function Profile(){
 return(
  <section id="profile-section" className="all-sections page-text Profile">
   <div className="container container-1">
    <h1>Personal Profile</h1>
   </div>
   <div class="container container-2">
    <div className="profile-image page-text">
     <img src="" alt="Muzikayise Khuzwayo"></img>
    </div>
    <div className="page-text">
     <h2>Hi, I'm <span className="name">Muzikayise</span>.</h2>
     <p>I'm a programmer, a frontend developer and a huge fan of Blogging.</p>
     <p>With my studies at the University of Cape Town having given me an appreciation of Computer Systems and Embedded Systems, I chose to pursue my passion for Software and Web Development and began my self-taught journey into Web Development.</p>
     <p>I have exerience in HTML, CSS, Javascript and ReactJS. I work primarily with the frontend and specialise in creating websites which are dynamic, responsive and beautiful. I typically use Firebase and Google Cloud Platform to deploy, test, and monitor my webapps.</p>
     <p>My Primary concentration right now is increasing my experience in the field, adding projects to my portfolio, and increasing my skillset in an effort to transition from a mainly frontend web development focus to a more fullstack web development approach. To do this I am currently learning NodeJS, PHP and Python and hopefully this will open up new avenues for my career in Web Development</p>
     <p>Currently, I am working as a Freelancer on <a href="#fiverr">Fiverr</a> , and a Blogger for my own self operated <a href="#blog">Blog</a>.</p>
    </div>
    <div className="container container-3"></div>
   </div>
  </section>
 )
}

export default Profile