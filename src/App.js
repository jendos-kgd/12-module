import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

import "./App.css";

function App() {
  console.log("App running");
  const [showParagraph, setShowParagraph] = useState(false);

  const toogleParagraphHandler = useCallback(() => {
    setShowParagraph((previousShowParagraph) => !previousShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}></DemoOutput>
      <Button onClick={toogleParagraphHandler}>Show or hide Paragraph</Button>
    </div>
  );
}

export default App;
