import React from 'react'; 

function Resume() {

return(
<section className="mb-5">
    <h1 className="resume">Resume</h1>
        <hr></hr>
        <div className="my-5">
            <div className="mt-5 pl-5 pr-5">
            Hard-working web developer with a flair for creating elegant solutions in the least amount of time. Developed an ecommerce webapp, customer web portal, documentary launch website, and donations webapp for a local charity. Passionate about software architecture and cloud computing. Regular attendee of web developer meetups and hackathons.
                
            </div>
        </div>

        <div >
            <div className='my-5'>
                <h2>Front End Experience</h2>
                <p>HTML, CSS (Bootstrap, Tailwind CSS), JavaScript, jQuery, React.js, IndexedDB</p>
            </div>
    
            <div className='my-5'>
                <h2>Back End Experience</h2>
                <p>
                Node.js, Express.js, SQL, Sequelize, NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
            <div>
                <h2>Download my resume <a href='https://github.com/Tien24196/react-portfolio/blob/main/public/resume.docx?raw=true'>here</a></h2>
            </div>
        </div>
</section>
);
}

export default Resume;