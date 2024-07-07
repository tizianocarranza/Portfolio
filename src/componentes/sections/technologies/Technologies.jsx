import React from 'react'
import { Section } from "../../elements/index"
import "./technologies.css"
import reactLogo from "../../../assets/reactLogo.svg"
import javascriptLogo from "../../../assets/javascriptLogo.svg"
import cssLogo from "../../../assets/cssLogo.svg"
import htmlLogo from "../../../assets/htmlLogo.svg"

function Technologies() {
  return (
    <Section sectionName="technologies">
      <div className="technologies__background"></div>
      <div className="technologies__background"></div>
      {/* <p className='technologies-title main-text'>Tech stack</p> */}
      <div className="technologies__container">
        <img src={cssLogo} alt="css" />
        <img src={htmlLogo} alt="html" />
        <img src={reactLogo} alt="react" />
        <img src={javascriptLogo} alt="javascript" />

      </div>
    </Section>
  )
}

export default Technologies