import React from 'react'
import "./cta.css"
import { Section } from "../../elements/index"


function Cta() {
  return (
    <Section sectionName="cta">
      <h1 className="cta__title regular-text">Lets talk!</h1>
      <p className='cta__text small-text'>Hey, I have an exciting <b>project/idea</b> that I'd love to <mark>bring to life</mark> with your expertise. Here are the <ins>details:</ins>
        <span>
          <input type="text" placeholder='describe your amazing idea' className='small-text'/>.
        </span>
      </p>
    </Section>
  )
}

export default Cta;