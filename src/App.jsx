import { useState } from "react";
import Editor from "./Editor.jsx";
import Previewer from "./Previewer.jsx";

function App() {
  const [got, setGot] = useState("");

  function getText(text) {
    setGot(text);
  }

  return (
    <>
      <Editor giveParentText={getText} />
      <Previewer textFromParent={got} />
      <div id="developerDiv">
        <p id="designedBy">Designed and Coded By</p>
        <p id="developer">Baraka Karuru</p>
      </div>
    </>
  );
}

export default App;
