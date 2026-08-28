import { useState, useEffect } from "react";
import TextStats from "./TextStats.";

function App() {
  const [text, setText] = useState("");

  const characters = text.length;

  useEffect(() => {
    document.title = `Characters: ${characters}`;
  }, [characters]);

  return (
    <div>
      <h1>Text Analyzer</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
        rows="8"
        cols="50"
      />

      <h3>Entered Text:</h3>
      <p>{text}</p>

      <TextStats text={text} />
    </div>
  );
}

export default App;