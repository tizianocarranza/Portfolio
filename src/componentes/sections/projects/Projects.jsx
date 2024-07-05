import React from 'react'
import "./projects.css"
import javascriptLogo from "../../../assets/javascriptLogo.svg"
import cssLogo from "../../../assets/cssLogo.svg"
import htmlLogo from "../../../assets/htmlLogo.svg"

function Projects() {
  return (
    <section className="projects__container">
        <div className="title regular-text">My projects</div>
        <div className="projects">
          <img src={javascriptLogo}/>
          <img src={htmlLogo}/>
          <img src={cssLogo}/>
        </div>
    </section>

  )
}

export default Projects;