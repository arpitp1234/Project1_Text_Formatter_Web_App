import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React from "react";
import { useState } from "react";
import Alertss from "./components/Alertss";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom"; //Used Routes instead of switch.

function App() {
  const [mode, setMode] = useState("light"); //It tells whether dark mode is enable or not.
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(255, 153, 153)";
      showAlert(": dark mode has been enabled", "success");
      document.title = "Text Formatter - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(": light mode has been enabled", "success");
      document.title = "Text Formatter - Light Mode";
    }
  };
  return (
    /*in this project user will give the text and in return it will no of words in the text ,captilize the word,converting into lowercase and uppercase then this project will help*/
    <>
      <Router>
        <Navbar
          title="Text Formatter"
          about="Aboutus"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alertss alert={alert} />
        <Switch>
          {/*/users --> component 1
           /users/home ---> componet 2*/}

          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/">
            <div className="container">
              <TextForm heading="Enter the Text Below :-" mode={mode} />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
    //so here title will act as props.So we are passing the props.
    //div.container is in the bootstrap.
  );
}

export default App;
