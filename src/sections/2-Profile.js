import '../css/Body.css'

// About Section

function Profile(){
 return(
  <section id="profile-section" className="all-sections page-text Profile">
   <div className="container container-1">
    <h1>A Bit About Me</h1>
   </div>
   <div class="container container-2">
    <div className="profile-image page-text">
     <img src="" alt="Muzikayise Khuzwayo"></img>
    </div>
    <div className="page-text">
     <h2>Hi, I'm <span className="name">Muzi</span>.</h2>
     <p>I’m here for one reason: to build proof that I was here, sharing ideas that matter and creating systems that last. My content is part of that proof—designed to resonate, to be seen, and to help people connect in authentic, meaningful ways.</p>
     <h2>What I Do</h2>
     <h3>AI Driven Growth Strategies</h3>
     <p>I design and implement fully automated systems that help brands scale effortlessly.</p>
     <h3>Custom Automated System Builds</h3>
     <p>Every solution is tailor-made to fit your needs, built for scalability and long-term use.</p>
     <h3>Smart Content Automation Systems</h3>
     <p>I create workflows that take the hard work out of content creation, allowing you to focus on your vision.</p>
    </div>
    <div className="page-text">
     <h2>Here's How I Approach Projects</h2>
     <p>I don’t do plug-and-play templates. I work with you to understand your unique needs, crafting systems that grow alongside your business.</p>
     <p>Every automation is designed for efficiency, scalability, and reusability, ensuring maximum results with minimal effort.</p>
     <p>Beyond just building systems, I empower clients with the strategies and tools to use them effectively.</p>
    </div>
    <div className="page-text">
     <h2>Who I Work With</h2>
     <p>I primarily collaborate with businesses looking to scale their brands, though I’m transitioning to working with high-functioning creators who sell products online. My clients often face one critical challenge: building trust and reach through content, not ads.</p>
     <p>Selling isn’t easy—people buy from people, not faceless brands. I help bridge that gap through long-term, automated content systems that foster trust and loyalty.</p>
    </div>
    <div className="container container-3"></div>
   </div>
  </section>
 )
}

export default Profile