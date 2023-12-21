import { useState } from "react";
import React from "react";

export default function About() {
  const [myStyle, mySetStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  let [btnText, setbtnText] = useState("Enable Dark Mode");

  let toggleStyle = () => {
    if (myStyle.color === "black") {
      mySetStyle({
        color: "red",
        backgroundColor: "rgb(204,204,204)",
        border: "4d4d4d",
      });
      setbtnText("Enable light Mode");
    } else {
      mySetStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtnText("Enable dark Mode");
    }
  };

  return (
    <>
      <div className="container my-5   " style={myStyle} >
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" style={myStyle}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong> About Text Formatter</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the Text Formatter Web Application</strong> It
                has several functionality related to text and string.It can do
                stuffs like doing uppercase or lowercase of sentences,removing
                white spaces between the text, copying the text with amazing
                features such as counting the number of word while input,
                enabling light and dark mode etc.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>About Creator</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <p>
                  <strong>Created By:-</strong> Arpit Pandey
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Technology Used</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This App is Created Using React.</strong> Apart from
                React  javascript ,HTML ,CSS and Bootstrap is also used while creating this
                web application.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button
          type="button"
          onClick={toggleStyle}
          className="btn btn-primary my-3"
        >
          {btnText}
        </button>
      </div>
    </>
  );
}
