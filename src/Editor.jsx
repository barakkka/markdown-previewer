import React, { useEffect, useState } from "react";

function Editor({ giveParentText }) {
  const [textContent, setTextContent] = useState(`
  # Welcome to my React Markdown Previewer

  ## This is a sub-heading

  Here's some inline code: \`<div></div>\`

  \`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

  There's also [a link](https://www.freecodecamp.org)

  > Block Quotes

  And of course, there are lists:
  - Some are bulleted
  - With different indentation levels
    - That look like this

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  **Bolded text**


`);

  useEffect(() => {
    giveParentText(textContent);
  }, [textContent]); //pass the text content to the parent (App) any time the state textContent changes.

  return (
    <div id="editorContainer">
      <div id="editorTop" className="top">
        <div className="topOne">
          <p>(fire logo) Editor</p>
        </div>
        <div className="topTwo">
          <button id="buttonOne" className="minimize maximize">
            X
          </button>
        </div>
      </div>
      <textarea
        name="editor"
        id="editor"
        onChange={(e) => setTextContent(e.target.value)}
        value={textContent}
      />
    </div>
  );
}

export default Editor;
