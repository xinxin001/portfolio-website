import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Experience = () => {
  return (
    <div className="section bg-image background" id="experience">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>Experience</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience