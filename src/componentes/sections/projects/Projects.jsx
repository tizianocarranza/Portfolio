import React from 'react'
import "./projects.css"
import { Section } from "../../elements/index"
import javascriptLogo from "../../../assets/javascriptLogo.svg"
import cssLogo from "../../../assets/cssLogo.svg"
import htmlLogo from "../../../assets/htmlLogo.svg"

function Projects() {
  return (
    <Section sectionName="projects">
      <h1 className='projects__title regular-text'>Watch some of my work!</h1>
      <img src={cssLogo} alt="" className='projects__project'/>
      <img src={cssLogo} alt="" className='projects__project'/>
      <img src={cssLogo} alt="" className='projects__project'/>
    </Section>


  )
}

export default Projects;