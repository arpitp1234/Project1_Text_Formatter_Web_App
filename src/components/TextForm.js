import React, { useState } from "react";

export default function TextForm(props) {
  /*earlier when we were writing class based component then we have to see lot of functions,since  people liked function based component so react has introduced hook.*/

  const [text, setText] = useState("Enter text here"); //important statement rememeber it.
  //text="new text"; //Wrong way to change the state
  //setText("new text"); //Correct way to change the state

  /*explaining above statement ,above keyword text the value should come enter text here and when we
    want to update this value we should use settext function*/

  /*hooks help you to use the feature of class without making the class */
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select(); //for selecting no of words
    /*text.setSelectionRange(0,9999)*/
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); //while copying the selected text will remove from this command.
  };
  const handleExtraSpaces = () => {
    let newText = text.split(
      /[ ]+/
    ); /*this sentence mean if there is more than one space in sentence then sentence will spilt and come inside array */
    setText(
      newText.join(" ")
    ); /*After that we have joined the array of elements */
  };
  const clearText = () => {
    let newText = " ";
    setText(newText);
  };
  /*my-2 bootstrap ki class hai jo hai y axis me 2 ka margin de degi,if we want to increase we can do my-3 or my-4 ,for margin in x mx -2*/
  return (
    <>
      <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "black" }} >
        <label className="mx-2 my-2" htmlFor="exampleFormControlTextarea1 ">
          {" "}
          <strong>{props.heading}</strong>
        </label>
        <textarea  className="form-control" id="myBox" rows="11.5"  value={text} onChange={handleOnChange}  style={{backgroundColor:  props.mode === "light" ? "rgb(115, 121, 120)" : "rgb(115, 121, 120)", color: props.mode === "dark" ? "white" : "black", }}
        ></textarea>
        <button  disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2"  onClick={handleDownClick}>
          convert to lowercase
        </button>
        <button disabled={text.length === 0}  className="btn btn-primary mx-2 my-2" onClick={clearText}
        >
          clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2"  onClick={handleCopy} >
          copy Text
        </button>
        <button className="btn btn-primary mx-2 my-2"  onClick={handleExtraSpaces}  disabled={text.length === 0} > Remove extra spaces </button>
      </div>
      <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "green" }} >
        <h1>Your text summary</h1>
        <p>  Your text have{" "}
          {  text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          These word can be read in :{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
