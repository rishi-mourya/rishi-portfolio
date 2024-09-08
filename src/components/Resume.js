import React from "react";

import Arrow from "./images/right-arrow.png";
import myPDF from '../assets/cv.pdf';
function Resume() {
  const handleDownload = () => {
    const pdfWindow = window.open();
    pdfWindow.document.write(
      '<iframe width="100%" height="100%" src="' + myPDF + '"></iframe>'
    );
  };
  return (
    <>
      <div className="relative-container  mt-2 common-animation-background">
        <div className="row mt-5 pt-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col text-center">

                <h1 className="headingName">Resume</h1>

              </div>
            </div>
          </div>



        </div>
        <div style={{ width: "10%", height: "10px" }} className="mx-auto py-2">
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "10px" }}
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "100%", height: "10px" }}
            ></div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button
              type="button"
              className="btn btn-primary rounded-5 px-1 py-2"
              onClick={handleDownload}
              style={{
                width: "200px",
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              Download CV
            
            </button>
            
          </div>
          <br />
        </div>
        <br />
        <br />

        <div className="row mt-3">
     
          <div className="col-lg-6 col-md-12 col-sm-12  mt-3">
            <div
              className="col text-start"
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginLeft: "35px",
                fontFamily: "roboto"
              }}
            >
              Education
            </div>
            <br />

            <div className="continer-fluid education">
              <div className="col title text-start">
                <img className="arrow" src={Arrow} alt="" />
                M.B.A in I.T.
              </div>
              <div
                className="col content text-start"
                style={{ paddingLeft: "40px" }}
              >
                IFTM University / 2022 - 2024
              </div>
              <div
                className="col content text-start"
                style={{ paddingLeft: "40px" }}
              >
                I am a second-year MBA student specializing in Information
                Technology, having completed a one-month summer training at
                Novas Arc Consulting Pvt. Ltd. This experience has enriched my
                understanding of practical IT applications in a professional
                context.
              </div>
            </div>
            <div className="continer-fluid education">
              <div className="col title text-start">
                <img className="arrow" src={Arrow} alt="" />
                Bachelor Degree
              </div>
              <div
                className="col content text-start"
                style={{ paddingLeft: "40px" }}
              >
                IFTM University / 2019 - 2022
              </div>
              <div
                className="col content text-start"
                style={{ paddingLeft: "40px" }}
              >
                I graduated from IFTM University in 2022 with a Bachelor's
                degree in Electronics and Communication Engineering, achieving a
                commendable 8.4 CGPA. I am eager to apply the knowledge and
                skills gained during my B.Tech studies to contribute effectively
                to professional endeavors in this field.
              </div>
            </div>
            <div className="continer-fluid education">
              <div className="col title text-start">
                <img className="arrow" src={Arrow} alt="" />
                Polytechnic Degree
              </div>
              <div
                className="col content text-start"
                style={{ paddingLeft: "40px" }}
              >
                IFTM University / 2016 - 2019
              </div>
              <div
                className="col content text-start"
                style={{ paddingLeft: "40px" }}
              >
                I completed my Polytechnic Degree in Electronics and
                Communication Engineering from IFTM University in 2019, securing
                a notable 75%. I am enthusiastic about applying the skills
                acquired during my Polytechnic studies to contribute effectively
                in a professional capacity.
              </div>
            </div>
            <br />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12  mt-3">
            <div
              className="col text-start"
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginLeft: "35px",
                fontFamily: "roboto"
              }}
            >
              Experience
            </div>
            <br />

            <div className="continer-fluid education ">
              <div className="col title text-start">
                <img className="arrow" src={Arrow} alt="" />
                Software Engineer
              </div>
              <div
                className="col content text-start"
                style={{ paddingLeft: "40px" }}
              >
              Novas Arc Consulting Pvt. Ltd. (Remote)
              </div>
              <div
                className="col content text-start"
                style={{ paddingLeft: "40px" }}
              >
                I embarked on my professional journey as a Junior Software Engineer
                at Novas Arc Consulting Pvt. Ltd. on March 20, 2023.
                With 1.6 years of experience, I have been actively engaged in
                honing my skills and contributing to the development processes.
              </div>
            </div>
            <div className="continer-fluid education ">
              <div className="col title text-start">
                <img className="arrow" src={Arrow} alt="" />
                Full Stack Developer
              </div>
              <div
                className="col content text-start"
                style={{ paddingLeft: "40px" }}
              >
                Novas Arc Consulting Pvt. Ltd. (Remote)
              </div>
              <div
                className="col content text-start"
                style={{ paddingLeft: "40px" }}
              >
                As a Full Stack Developer at Novas Arc Consulting Pvt. Ltd., I
                bring a year of experience, specializing in the Django Framework
                by self studying tremendously. Proficient in Python, HTML, CSS,
                Bootstrap, and MySQL.
              </div>
            </div>
            <div className="continer-fluid education ">
              <div className="col title text-start">
                <img className="arrow" src={Arrow} alt="" />
                Front-End Developer
              </div>
              <div
                className="col content text-start"
                style={{ paddingLeft: "40px" }}
              >
                Novas Arc Consulting Pvt. Ltd. (Remote)
              </div>
              <div
                className="col content text-start"
                style={{ paddingLeft: "40px" }}
              >
                I served as a Front-End Developer at Novas Arc Consulting Pvt.
                Ltd. dedicating 6 months to working with the Flutter Framework.
                Starting from scratch, I successfully contributed to the
                development of user interfaces.
              </div>
            </div>
            <br />
          </div>
        </div>

        <div
          className="row text-center"
          style={{ marginLeft: "25px", marginTop: "20px" }}
        >
          <p className="commonText">My level of knowledge in some tools</p>
          <h1>My Skills</h1>
        </div>

        <div className="skills-section single-section">
          <div className="row">

            <div className="col-12 col-md-6">
              <div className="single-skill " data-percentage="90">
                <div className="skill-info d-flex justify-content-between mb-2">
                  <span className="skill-name">Flutter</span>
                  <span
                    className="skill-percentage"
                    style={{ marginRight: "114px" }}
                  >
                    90%
                  </span>
                </div>
                <div className="progress skill-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="95"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="single-skill " data-percentage="80">
                <div className="skill-info d-flex justify-content-between mb-2">
                  <span className="skill-name">HTML/CSS</span>
                  <span
                    className="skill-percentage"
                    style={{ marginRight: "114px" }}
                  >
                    80%
                  </span>
                </div>
                <div className="progress skill-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="95"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="single-skill " data-percentage="90">
                <div className="skill-info  d-flex justify-content-between mb-2">
                  <span className="skill-name">Web Design</span>
                  <span
                    className="skill-percentage"
                    style={{ marginRight: "60px" }}
                  >
                    90%
                  </span>
                </div>
                <div className="progress skill-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="90"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div className="single-skill" data-percentage="40">
                <div className="skill-info  d-flex justify-content-between mb-2">
                  <span className="skill-name">Database</span>
                  <span
                    className="skill-percentage"
                    style={{ marginRight: "345px" }}
                  >
                    40%
                  </span>
                </div>
                <div className="progress skill-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="40"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="single-skill" data-percentage="80">
                <div className="skill-info  d-flex justify-content-between mb-2">
                  <span className="skill-name">Django</span>
                  <span
                    className="skill-percentage"
                    style={{ marginRight: "230px" }}
                  >
                    80%
                  </span>
                </div>
                <div className="progress skill-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="80"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="single-skill" data-percentage="60">
                <div className="skill-info  d-flex justify-content-between mb-2">
                  <span className="skill-name">React js</span>
                  <span
                    className="skill-percentage"
                    style={{ marginRight: "230px" }}
                  >
                    60%
                  </span>
                </div>
                <div className="progress skill-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="60"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div className="single-skill " data-percentage="80">
                <div className="skill-info d-flex justify-content-between mb-2">
                  <span className="skill-name">Python</span>
                  <span
                    className="skill-percentage"
                    style={{ marginRight: "114px" }}
                  >
                    80%
                  </span>
                </div>
                <div className="progress skill-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="95"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="single-skill" data-percentage="90">
                <div className="skill-info  d-flex justify-content-between mb-2">
                  <span className="skill-name">Bootstrap</span>
                  <span
                    className="skill-percentage"
                    style={{ marginRight: "55px" }}
                  >
                    90%
                  </span>
                </div>
                <div className="progress skill-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="90"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
