import React, { useState, useEffect } from "react";
import "./App.css";
const Checkbox = () => {
  const [load, setload] = useState(false);
  const [api, setapi] = useState();
  const [input, setInput] = useState("");

  let apicall = () => {
    fetch("https://jservice.io/api/random")
      .then((data) => {
        return data.json();
      })
      .then((apidata) => {
        setapi(apidata);
        setload(true);
        console.log(apidata);
      });
  };
  useEffect(apicall, []);
  return !load ? (
    <div className="App">
      <h1>App is Loading.........</h1>
    </div>
  ) : (
    <div className="App">
      <h2>Your Question is here</h2>
      <h3>{api[0].question} ?</h3>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <br />
      <br />
      <button
        onClick={() => {
          if (input === "") {
            alert("Please enter something");
            return;
          }
          if (api[0].answer === input) {
            alert("Congratulations! Right answer");
            setInput("");
          } else {
            alert(" Wrong answer! Please Try agian ");
            setInput("");
          }
          apicall();
        }}
      >
        Submit & check
      </button>
    </div>
  );
};

export default Checkbox;
