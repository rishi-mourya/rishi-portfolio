
import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // const [error, setError] = useState("");
  const [error] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch("https://formcarry.com/s/fSfA2RSUre", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        setLoading(false);
        throw new Error(
          `Form submission failed with status: ${response.status}`
        );
      }

      const responseData = await response.json();

      if (responseData.code === 200) {
       
        setAlertMessage("Your Query has been submitted successfully!");
        // Reset the form fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setLoading(false);
        setTimeout(() => {
            setAlertMessage("");
            
          }, 1500);
      } else if (responseData.code === 422) {
        // Field validation failed
        setAlertMessage(responseData.message);
        setLoading(false);
        setTimeout(() => {
            setAlertMessage("");
            
          }, 1500);
      } else {
        // Other error from Formcarry
        setAlertMessage(responseData.message);
        setLoading(false);
        setTimeout(() => {
            setAlertMessage("");
            
          }, 1500);
      }
    } catch (error) {
      // Request-related error
      setAlertMessage(error.message);
       setTimeout(() => {
            setAlertMessage("");
            
          }, 1500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative-container  mt-2 common-animation-background">
        <div className="col mt-4 pt-4 ">
          {alertMessage && (
            <div className="alert alert-primary" role="alert">
              {alertMessage}
              
            </div>
          )}
          <p className="mt-4 commonText">Please feel free to contact me at any time.</p>
          <h1 className="headingName">Get in touch</h1>
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
        <div className="contact-section single-section">
          <div className="row">
            <div className="col-12 col-lg-7">
              <form
                className="contact-form"
                id="contact-form"
                onSubmit={handleSubmit}
              >
                <h2 className="content-title text-start">Message Me</h2>
                <p className="contact-feedback">{error}</p>
                <div className="row">
                  <div className="col-12 col-md-6 form-group">
                    <input
                      required
                      className="form-control"
                      id="contact-name"
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 col-md-6 form-group">
                    <input
                      className="form-control"
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 form-group">
                    <input
                      className="form-control"
                      id="contact-subject"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                      value={subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 form-group form-message">
                    <textarea
                      className="form-control"
                      id="contact-message"
                      name="message"
                      placeholder="Message"
                      rows="5"
                      required
                      value={message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-12 form-submit text-start mb-4">
                    <button
                      type="submit"
                      style={{
                        width:"250px",
                        fontWeight:"700px",
                          fontSize:"21px"
                  
                      }}
                      className="btn btn-primary rounded-5 px-5 py-2 "
                      disabled={loading}
                    >
                      {loading && (
                        <div
                          className="spinner-border fs-10px"
                          role="status"
                        ></div>
                      )}
                      {!loading && "Submit"}
                    </button>
                    
                  </div>
                 
                </div>
              </form>
            </div>
            
          

            <div className="col-12 col-lg-5  text-start">
              <div className="contact-info">
                <h2 className="content-title  ">Contact Info</h2>
                <p className="info-description  m-0 p-0 ">
                  Always available for freelance work if the right project comes
                  along, Feel free to contact me!
                </p>
                <table className="table table-bordered table-hover table-striped mt-3">
                  <tbody>
                    <tr>
                      <th scope="row">Name</th>
                      <td>Rishi Mourya</td>
                    </tr>
                    <tr>
                      <th scope="row">Location</th>
                      <td>Mordadabad(244001), UttarPradesh, India</td>
                    </tr>
                    <tr>
                      <th scope="row">Phone</th>
                      <td>
                        <a href="tel:+917617518700">+91 7617518700</a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>
                        <a href="mailto:rishithebackend@gmail.com">
                          rishi.kr.mbd@gmail.com
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
