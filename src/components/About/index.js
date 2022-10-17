import React from 'react';

function About() {
  return (
    <section className="title">
      <h1 class="name">about me</h1>
      <hr></hr>
      
      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
            <img class="mb-5" src="https://raw.githubusercontent.com/Tien24196/it-is-awsome/main/assets/images/avatar.jpg" alt="Tien Ngo"/>
        <p>
        My name is Tien, and I’m a career writer. My job is to provide job seekers with expert advice on career-related topics. I read a lot and consult recruiting professionals so you don’t have to. I show you how to hack the recruitment process, create a job-winning resume, ace the job interview, and... introduce yourself, among others.
        </p>
        <p>
        When you want to get to know someone, ask about their hobbies and interests. Talking about hobbies means you can share details about yourself, and discover shared interests and free-time activities.
        </p>
        
      </div>  
      </div>
    </section> 
  );
}

export default About;