import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section bg-image background" id="contact">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <a className="primary-btn" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                className="primary-btn"
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
