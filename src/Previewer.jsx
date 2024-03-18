import React, { useCallback, useEffect, useState } from "react";
import { marked } from "marked";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

function Previewer({ textFromParent }) {
  const parsedMarkdown = marked(textFromParent, { breaks: true });
  const [icon, setIcon] = useState("minimize");

  const handleClick = useCallback(() => {
    const button = document.getElementById("buttonTwo");
    if (button.classList.contains("maximize")) {
      setIcon("minimize");
    } else {
      setIcon("maximize");
    }
  }, []);

  useEffect(() => {
    const button = document.getElementById("buttonTwo");
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div id="previewerContainer">
      <div id="previewerTop" className="top">
        <div className="topOne">
          <p>
            <FontAwesomeIcon icon={faFreeCodeCamp} /> Previewer
          </p>
        </div>
        <div className="topTwo">
          <button id="buttonTwo" className="maximize" onClick={handleClick}>
            <FontAwesomeIcon
              icon={icon === "maximize" ? faWindowMinimize : faExpand}
              className={icon}
            />
          </button>
        </div>
      </div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
      ></div>
    </div>
  );
}

export default Previewer;
