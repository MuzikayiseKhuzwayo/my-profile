import '../css/Body.css'

// Contact Section

function Contact(){
 return(
  <section id="contact-section" className="all-sections Contact ">
   <div className="inner-container">
    <div className="container container-4 page-text">
     <h1>Contact Me</h1>
     <h3>Need a dedicated developer for your project? Don't even hesitate.</h3>
     <form action="#">
      <label for="full-name">Full Name</label>
      <input type="text" id="full-name" name="full-name"></input>
      <label for="email">Email</label>
      <input type="email" id="email" name="email"></input>
      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Your Query..."></textarea>
      <input type="submit" value="Submit >>"></input>
     </form>
     
    </div>
   </div>
  </section>
 )
}

export default Contact