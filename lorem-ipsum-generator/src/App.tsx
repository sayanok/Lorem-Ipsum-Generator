import React, { useState } from "react";
import { LoremIpsum } from "lorem-ipsum";

const App: React.FC = () => {
  const [numberOfParagraphs, setNumberOfParagraphs] = useState<number>(1);
  const [generatedText, setGeneratedText] = useState("");
  const lorem = new LoremIpsum({});

  function generateText() {
    let generated;
    if (!numberOfParagraphs) {
      generated = lorem.generateParagraphs(1);
    } else {
      generated = lorem.generateParagraphs(numberOfParagraphs);
    }
    setGeneratedText(generated);
  }

  function copyText() {
    const copyText = document.getElementById("textBox")?.innerHTML;
    if (copyText) {
      navigator.clipboard.writeText(copyText);
    }
  }

  return (
    <>
      <p>
        段落を入力してください:
        <input
          type={"number"}
          min="1"
          onChange={(e) => setNumberOfParagraphs(e.target.valueAsNumber)}
          value={numberOfParagraphs}
        ></input>
      </p>
      <button onClick={() => generateText()}>テキスト生成</button>
      <div id="textBox" className="textBox" style={{ whiteSpace: "pre-line" }}>
        {generatedText}
      </div>
      <button id="copy" onClick={() => copyText()}>
        生成されたテキストをコピーする
      </button>
    </>
  );
};

export default App;
