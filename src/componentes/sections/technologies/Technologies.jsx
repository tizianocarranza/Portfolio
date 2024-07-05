import React from 'react'
import "./technologies.css"
import reactLogo from "../../../assets/reactLogo.svg"
import javascriptLogo from "../../../assets/javascriptLogo.svg"
import cssLogo from "../../../assets/cssLogo.svg"
import htmlLogo from "../../../assets/htmlLogo.svg"

function Technologies() {
  return (
    <section className="technologies">
      <div className="technologies-sticky-container">
        <div className="technologies-background"></div>
        <div className="technologies-background"></div>
      {/* <p className='technologies-title main-text'>Tech stack</p> */}
        <div className="technologies-container">
          <img src={cssLogo} alt="css" />
          <img src={htmlLogo} alt="html" />
          <img src={reactLogo} alt="react" />
          <img src={javascriptLogo} alt="javascript" />
        </div>
      </div>
    </section>
  )
}

export default Technologies