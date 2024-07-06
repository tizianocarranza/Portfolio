import React from 'react';
import "./section.css";

function Section({ sectionName, children }) {
  return (
    <section className={`section ${sectionName}`}>
      <div className={`section__content ${sectionName}__content`}>
        {children}
      </div>
    </section>
  );
}

export default Section;
