import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <section className='footer'>

      <div className="footer__content">

        <div className="footer__info">
          <ul className="footer__column">
            <h3 className="footer__column__title regular-text">About</h3>
            <div className="footer__column__links">
              <li className="footer__link">Example</li>
              <li className="footer__link">Example</li>
              <li className="footer__link">Example</li>
            </div>
          </ul>

          <ul className="footer__column">
            <h3 className="footer__column__title regular-text">Social</h3>
            <div className="footer__column__links">
              <li className="footer__link">Example</li>
              <li className="footer__link">Example</li>
              <li className="footer__link">Example</li>
            </div>
          </ul>

          <ul className="footer__column">
            <h3 className="footer__column__title regular-text">Contact</h3>
            <div className="footer__column__links">
              <li className="footer__link">Example</li>
              <li className="footer__link">Example</li>
              <li className="footer__link">Example</li>
            </div>
          </ul>

        </div>


        <div className="footer__disclaimer">
          <p>©2024 Emperia. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer