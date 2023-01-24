import React from 'react'
import {SVG_SHAPES, PROJECT as myProjects} from './util/constant';
// import projectBackground from '../images/background.png';

export const Projects = () => {

  SVG_SHAPES.map((val,i)=> myProjects[i % SVG_SHAPES.length].shape = val);  
  return (
    <div>
        <section id="services" className="services">
        <div className="container" data-aos="fade-up">
        {/* <img src={projectBackground} alt='' id="projectBG"></img> */}
          <div className="section-title">
            <h2>Projects</h2>
            <p>Learning and executing the skills in a precise mannner to resolve real life problems</p>
          </div>
          
          <div className="row">
            {
              myProjects.map((project,index)=>{
                return (
                  <div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                    <div className={`icon-box rounded iconbox-${project.color} my-3`}>
                      <div className="icon">
                        <div dangerouslySetInnerHTML={{__html: `${project.shape}`}} /> 
                        <i className={`${project.icon}`}></i>
                      </div>
                      <h4><a href={project.link} target="blank">{project.title}</a></h4>
                      <p>{project.description}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
      </section>     
    </div>
  )
}
