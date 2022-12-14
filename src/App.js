import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

import "./App.css";

function App() {
  console.log("App running");
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowTogle, setAllowTogle] = useState(false);

  const allowTogleHandler = () => {
    setAllowTogle(true);
  };

  const toogleParagraphHandler = useCallback(() => {
    if (allowTogle) {
      setShowParagraph((previousShowParagraph) => !previousShowParagraph);
    }
  }, [allowTogle]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}></DemoOutput>
      <Button onClick={allowTogleHandler}>Allow togle</Button>
      <Button onClick={toogleParagraphHandler}>Show or hide Paragraph</Button>
    </div>
  );
}

export default App;
