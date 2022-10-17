import React from 'react';
function Card({image, github, deploy, topics, name }) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={image} alt='' />
            </div>
            <div className='card-title'>
                <h3>{name}</h3>
            </div>
            <div>
              <a href={github}><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a> 
              <a href={deploy}><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a> 
            </div>
            <div className='card-body'>
                <p>{topics}</p>

            </div>

            
        </div>
    )
}

export default Card