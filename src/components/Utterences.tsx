"use client";

import { useTheme } from "next-themes";
import React from "react";

function Utterences() {
  const { theme } = useTheme();

  const utterances_theme = theme === "dark" ? "github-dark" : "github-light";

  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement("script");
        scriptElem.setAttribute("src", "https://utteranc.es/client.js");
        scriptElem.setAttribute("repo", "parkingbox/Parking-Blog");
        scriptElem.setAttribute("issue-term", "pathname");
        scriptElem.setAttribute("theme", utterances_theme);
        scriptElem.setAttribute("crossorigin", "anonymous");
        scriptElem.setAttribute("async", "true");
        elem.replaceChildren(scriptElem);
      }}
    />
  );
}

export default Utterences;
