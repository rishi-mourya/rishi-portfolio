import React from "react";

import MyPic from "./images/rishi_mourya.jpg"; // Replace with the actual path to your image

// import myPDF from 'C:\data\my-website\my-website\src\assets\cv.pdf';
import myPDF from '../assets/cv.pdf';



import "./Common.css";
import { Link } from "react-router-dom";
function About() {
  const handleDownload = () => {
    const pdfWindow = window.open();
    pdfWindow.document.write(
      '<iframe width="100%" height="100%" src="' + myPDF + '"></iframe>'
    );
  };

  return (
    <div>
      <div className="relative-container px-2  common-animation-background ">
        <div className="row  mt-5 pt-4">
          <div className="col">
            <p className="commonText">Get to Know me</p>
            <h1 className="headingName">About Me</h1>
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
        </div>
        <br />

        <div className="row px-4  ">
          <div className="col-lg-5 col-md-12  ">
            <img src={MyPic} alt="" style={{ height: "100%", width: "100%" }} />
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="col text-start pt-2  ">
              <h2 className="headingName fs-2">
                Creative Tech Professional: Rishi Mourya
              </h2>

              <p className="aboutUsContent">
                Hello, I'm Rishi Mourya, an experienced Web and Mobile
                Application Developer dedicated to crafting digital experiences
                that transcend expectations. With a passion for innovation, I
                thrive on transforming ideas into seamless, user-centric
                applications. Currently exploring freelancing opportunities, I
                bring a creative flair and meticulous attention to detail to
                every project, whether navigating the intricacies of web
                development or the fluidity of mobile applications. <br />
                Join me on this exciting journey of digital transformation,
                where we turn visions into captivating realities. Let's create
                something extraordinary together!
              </p>

              <div className=" blankLine"></div>

              <table className="table table-bordered table-hover table-striped mt-3">
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>Rishi Mourya</td>
                  </tr>
                  <tr>
                    <th scope="row">Email-id</th>
                    <td>rishi.kr.mbd@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone</th>
                    <td>7617518700</td>
                  </tr>

                  <tr>
                    <th scope="row">From</th>
                    <td>India</td>
                  </tr>
                </tbody>
              </table>

              <div className="row ">
                <div className="col-4 text-center ">
                  <button
                    type="button"
                    className="btn btn-primary rounded-5 px-1 py-2 "
                    onClick={handleDownload}
                    style={{
                      width: "100%",
                      fontWeight: "500px",
                      fontSize: "18px",
                    }}
                  >
                    Download CV
                  </button>
                </div>
                <div className="col">
                  <div
                    className="row gx-0 "
                    style={{
                      width: "80%",
                    }}
                  >
                    <div className="col-auto me-3 " target="_blank">
                      <Link
                        to="https://www.facebook.com/rishi.mourya.96"
                        className="social-linkAbout"
                      >
                        <i className="bi bi-facebook"></i>
                      </Link>
                    </div>
                    <div className="col-auto me-3" target="_blank">
                      <Link
                        to="https://instagram.com/__mickey_0305?igshid=OGQ5ZDc2ODk2ZA=="
                        className="social-linkAbout"
                      >
                        <i className="bi bi-instagram"></i>
                      </Link>
                    </div>
                    <div className="col-auto me-3" target="_blank">
                      <Link
                        to="https://x.com/RishiMourya7?t=ppl8Wn3nzK837-7ilbDdSw&s=08"
                        className="social-linkAbout"
                        target="_blank"
                      >
                        <i className="bi bi-twitter"></i>
                      </Link>
                    </div>

                    <div className="col-auto me-3" target="_blank">
                      <Link
                        to="https://github.com/rishi-mourya/"
                        className="social-linkAbout"
                      >
                        <i className="bi bi-github"></i>
                      </Link>
                    </div>
                    <div className="col-auto">
                      <Link
                        to="https://www.linkedin.com/in/rishi-morya-8b1a69149?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="social-linkAbout"
                      >
                        <i className="bi bi-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default About;
