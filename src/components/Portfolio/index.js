import React from 'react';
import Card from '../Card'



function Portfolio() {

    const project = [
        {
        
        name: "GifYoda",
        image: "https://raw.githubusercontent.com/EricksonVIK/YodaIM/main/image/Screenshot%202022-08-21%20130910.png",
        github: "https://github.com/EricksonVIK/YodaIM",
        deploy: "application.https://ericksonvik.github.io/YodaIM/",
        topics: "CSS, HTML, Javascript, Boostrap, Jquery"
        },
        {
        
        name: "MVC Tech Blog",
        image: "https://raw.githubusercontent.com/Tien24196/tech-blogs/main/Image/screenshot.png",
        github: "https://github.com/Tien24196/tech-blogs",
        deploy: "https://aqueous-temple-78983.herokuapp.com/",
        topics: "model-view-controller, bulma, bcrypt, express-js, mysql, sequelize, node-js, nodemon, dotenv, handlebars-js, jest"
        },
        {
       
        name: "To-Dine List",
        image: "https://raw.githubusercontent.com/crisdege/to-dine-list/main/public/images/homepage.png",
        github: "https://github.com/crisdege/to-dine-list",
        deploy: "https://hidden-shelf-57015.herokuapp.com",
        topics: "javascript, express, Node.js, handlebar, sequelize, dotenv, bcrypt "
        },
        {
       
        name: "Text Editor",
        image: "https://raw.githubusercontent.com/Tien24196/text-editor/main/image/screenshot.png",
        github: "https://github.com/Tien24196/text-editor",
        deploy: "https://fierce-bayou-01197.herokuapp.com/",
        topics: "indexedDB, mongoDB, mongoose, compression"
        },
        {
       
        name: "Weather Dashboard",
        image: "https://raw.githubusercontent.com/Tien24196/Global-weather/main/assets/image/screenshot.png",
        github: "https://github.com/Tien24196/Global-weather",
        deploy: "https://tien24196.github.io/Global-weather/",
        topics: "javascript, jQuery, html, bootstrap, moment, API"
        },
        {
       
        name: "Work Day Scheduler",
        image: "https://raw.githubusercontent.com/Tien24196/Code-for-fun/main/Develop/image/screenshot.png",
        github: "https://github.com/Tien24196/Code-for-fun",
        deploy: "https://tien24196.github.io/Code-for-fun/",
        topics: "javascript, HTML, CSS, Jquery, Bootstrap "
        }
    ]


    return(

     
        <div className=' wrapper'>
        
          {project.map((pro)=> (

            

               <Card 
                key = {pro.name}
                image = {pro.image}
                github = {pro.github}
                deploy = {pro.deploy}
                topics = {pro.topics}
                name  = {pro.name}
                
                />

            

          ))} 
          
           
        </div>
 
    )
}
export default Portfolio
